import { Command, CommandOptions, Args } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Message, MessageEmbed } from 'discord.js';

@ApplyOptions<CommandOptions> ({
    name: 'settings',
    detailedDescription: 'settings <name> <options>',
    description: 'customize settings for users',
    aliases: ['settings', 'userconfig', 'usersettings'],
    requiredClientPermissions: ['READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'SEND_MESSAGES']
})

export class SettingsCommand extends Command {
    async messageRun(message: Message, args: Args) {
        let settingNameList = [
            {
                name: 'replyMention',
                usage: 'settings replyMention true'
            },
            {
                name: 'color',
                usage: 'settings color blue'
            }
        ];
        let name = await args.pickResult('string');
        if(!name.success) {
            let embed = new MessageEmbed()
            .setColor(this.container.client.config.Color)
            .setTimestamp()
            .setAuthor({ name: `Settings List` })
            settingNameList.map(x => {
                embed.fields.push({
                    name: `${x.name}`,
                    value: `<:reply_1:947503681719382066>・\`${this.container.client.fetchPrefix(message)}${x.usage}\``,
                    inline: false
                })
            })
            return message.reply({embeds: [embed]});
        }
        if(name.success && !settingNameList.map(x => x.name.toLowerCase()).includes(name.value.toLowerCase())) return message.reply('Setting name could not be found or is invalid');

        return message.reply(`${name.value}`)
    }
}