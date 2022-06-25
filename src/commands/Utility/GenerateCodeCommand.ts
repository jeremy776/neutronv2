import { CommandOptions, Command, Args } from '@sapphire/framework';
import { Message } from 'discord.js';
import { ApplyOptions } from '@sapphire/decorators';

const LANG = [
    {
        name: ['Javascript', 'Js'],
        comment: '//'
    },
    {
        name: ['Python', 'Py'],
        comment: '#'
    }
]

@ApplyOptions<CommandOptions>({
    name: 'generate-code',
    detailedDescription: "generate-code js ```js\n// Create a function to sum two number```",
    aliases: ["gc"],
    description: '',
    requiredClientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS']
})

export class generateCodeCommand extends Command {
    async messageRun(message: Message, args: Args) {
        let str = await args.restResult('string');
        if (!str) return message.reply('quest');

        let splitArgs = str.value?.split(' ');
        let getCode = splitArgs?.join(' ').split(/[```]+/g)[1].replace(/\n/g, ' ').split(' ');

        let code = LANG.filter(x => x.name.map(y=>y.toLocaleLowerCase()).includes(getCode![0].replace(/([a-z A-Z 0-9])/g, '$1.').split('.').slice(0, -1).join('')))[0].name[0];
        
        
        // for(let lang of LANG) {
        //     for(let l of lang.name) {
        //         let p = l.toLocaleLowerCase();
        //         console.log(p)
        //         console.log(/p/.test('js //'));
        //     } 
        // }
        
        if(!code) code = splitArgs![0].split(/`/g)[0];
        // console.log(`${getCode?.slice(1)}`)

        let getLanguage = LANG.filter(x => x.name.map(y => y.toLowerCase()).includes(code.toLocaleLowerCase()))[0];
        
        
        if(!getLanguage) return message.reply('Invalid language')

        let response = await this.container.client.openai.createCompletion({
            model: this.container.client.config.OPENAI.model,
            prompt: `${getCode?.slice(1).join(' ').split(new RegExp(getLanguage.comment, 'g')).slice(1).map(x => `${getLanguage.comment}${x}`).join('\n')}\n\n${getLanguage.name[0]}:`,
            temperature: 1,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        // console.log(`${getCode}\n\n${getLanguage.name[0]}`)
        console.log(response.data.choices![0]);
        // console.log(getCode?.splice(1).map(x => `//${x}`).join('\n').trim());
        return message.reply(`\`\`\`${code}\n${response.data.choices![0].text}\`\`\``)
        // return message.reply('ok')
    }
}