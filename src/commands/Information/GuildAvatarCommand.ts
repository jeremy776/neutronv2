import { Command, CommandOptions } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Message, MessageEmbed } from 'discord.js';

@ApplyOptions<CommandOptions> ({
    name: 'guildicon',
    aliases: ['guildicon', 'guild-icon'],
    description: 'show the icon of the server',
    detailedDescription: 'guilicon',
    requiredClientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS']
})

export class GuildAvatarCommand extends Command {
    async messageRun(message: Message) {
        let embed = new MessageEmbed()
        .setColor(this.container.client.config.Color)
        .setAuthor({ name: `Icon from ${message.guild?.name}` })
        .setTimestamp()
        // @ts-ignore
        .setImage(message.guild?.iconURL() ? message.guild?.iconURL({dynamic: true, size: 2048, format: 'png'}) : 'https://media.discordapp.net/attachments/901133191962837053/948053272948793344/859424401971609600.jpg');
        return message.reply({ embeds: [embed] });
    }
}