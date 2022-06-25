import { CommandOptions, Command, Args } from '@sapphire/framework';
import { Message } from 'discord.js';
import { ApplyOptions } from '@sapphire/decorators';

const LANG = [
    {
        name: ['Javascript', 'Js'],
        comment: '[(/*)(*/)]',
        format: "js"
    },
    {
        name: ['Python', 'Py'],
        comment: '#',
        format: "py"
    },
    {
      name: ["Java", "Kotlin", "Kt"],
      comment: "//",
      format: "kotlin"
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

        let code: any;

        LANG.filter(x => x.name.map(y=>y.toLocaleLowerCase()).includes(getCode![0].replace(/([a-z A-Z 0-9])/g, '$1.').split('.').slice(0, -1).join(''))).length !== 0
        ? code = LANG.filter(x => x.name.map(y=>y.toLocaleLowerCase()).includes(getCode![0].replace(/([a-z A-Z 0-9])/g, '$1.').split('.').slice(0, -1).join('')))[0].name[0]
        : null // message.reply(`The language you are using is not supported. The supported language is: \`\`\`\n${LANG.map(x => x.name[0])}\`\`\``);
        
        if(!code) code = splitArgs![0].split(/`/g)[0];

        if(!code) return message.reply(`The language you are using is not supported. The supported language is: \`\`\`\n${LANG.map(x => x.name[0]).join(', ')}\`\`\``);
        
        // if(!code) return message.reply(`The language you are using is not supported. The supported language is: \`\`\`\n${LANG.map(x => x.name[0])}\`\`\``)
        console.log(`${getCode?.slice(1)}`)

        let getLanguage = LANG.filter(x => x.name.map(y => y.toLowerCase()).includes(code.toLocaleLowerCase()))[0];
        
        
        if(!getLanguage) return message.reply(`The language you are using is not supported. The supported language is: \`\`\`\n${LANG.map(x => x.name[0])}\`\`\``)

        let response = await this.container.client.openai.createCompletion({
            model: this.container.client.config.OPENAI.model,
            prompt: `${getCode?.slice(1).join(' ').split(new RegExp(getLanguage.comment, 'g')).slice(1).map(x => `${getLanguage.comment}${x}`).join('\n')} in ${getLanguage.name[0]}\n\n${getLanguage.name[0]}:`,
            temperature: 1,
            max_tokens: 1500,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.1,
        });

        console.log(response.data.choices![0]);
        return message.reply(`\`\`\`${getLanguage.format}\n${response.data.choices![0].text}\`\`\``)
    }
}