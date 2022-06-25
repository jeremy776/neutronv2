import { CommandOptions, Command, Args } from '@sapphire/framework';
import { Message } from 'discord.js';
import { ApplyOptions } from '@sapphire/decorators';

const LANG = [
    {
        name: ['english'],
        code: 'en'
    },
    {
        name: ['indonesian', 'indonesia'],
        code: 'id'
    }
]

@ApplyOptions<CommandOptions>({
    name: 'correct-grammar',
    detailedDescription: "correct-grammar <lang> <text>",
    aliases: ["cg"],
    description: '',
    requiredClientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS']
})

export class CorrectGrammarCommand extends Command {
    async messageRun(message: Message, args: Args) {
        try {
            const userArgument =  await args.rest('string');

            const lang = userArgument.split(' ')[0];
            if(!lang) return message.reply('Please input your lang');
            let pickTheLang = LANG.filter(x => x.name.includes(lang.toLocaleLowerCase()) || x.code == lang.toLocaleLowerCase())[0]
            if(!pickTheLang) return message.reply('Invalid language');

            const text = userArgument.split(' ').slice(1).join(' ');

            if(!text) return message.reply('Please input your text');

            const response = await this.container.client.openai.createCompletion({
                model: this.container.client.config.OPENAI.model,
                prompt: `Corret this to standard ${pickTheLang.name[0]}:\n\n${text}`,
                temperature: 1,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0
            });

            let newcorrect = response.data.choices![0].text?.replace(/\n/g, '');

            return message.reply(`**OLD**:\n\`\`\`\n${text}\`\`\`\n**NEW**:\n\`\`\`\n${newcorrect}\`\`\``)
        } catch (e) {
            return message.reply(`\`\`\`js\n${e}\`\`\``)
        }
    }
}