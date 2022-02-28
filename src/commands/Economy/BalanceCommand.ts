import { CommandOptions, Command, Args } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Message, MessageEmbed } from 'discord.js';
import { createUser, getUser } from '../../controller/User.Controller';

@ApplyOptions<CommandOptions> ({
    name: 'balance',
    aliases: ['bal'],
    detailedDescription: 'bal [@user]',
    description: 'view the user coin amount',
    requiredClientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS']
})

export class BalanceCommand extends Command {
    async messageRun(message: Message, args: Args) {
        let data = await getUser(message.author.id);
        let userdata;
        if(data.length == 0) {
            userdata = await createUser(message);
        } else {
            userdata = data[0];
        }
        
        let embed = new MessageEmbed()
        .setColor('GREEN')
        .addField('<:coin:947526776077287465>・Coin', `<:reply_1:947503681719382066>・**\`${userdata.balance?.toLocaleString()}\`**`)
        .addField('Bank', `・**\`${userdata.bank?.toLocaleString()}\`** / **\`${userdata.maxBank?.toLocaleString()}\`**`)
        return message.reply({ embeds: [embed] });
    }
}