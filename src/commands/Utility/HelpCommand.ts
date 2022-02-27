import { CommandOptions, Command, Args } from '@sapphire/framework';
import { MessageEmbed, Message } from 'discord.js';
import { ApplyOptions } from '@sapphire/decorators';

@ApplyOptions<CommandOptions>({
	name: 'help',
	description: 'show command list',
	requiredClientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS']
})

export class HelpCommand extends Command {
	async messageRun(message: Message, args: Args) {
		const userArgument = await args.restResult('string');
		if(userArgument.success) {
			const command = this.container.stores.get('commands').get(userArgument.value);
			if(!command) return;
			const emb = new MessageEmbed()
			.setColor('GREEN')
			.addField("Description", `${command.description ? command.description : 'No Description'}`)
			return message.channel.send({ embeds: [emb] });
		}
		
		const categories = [...new Set(this.container.stores.get('commands').map(x => x.fullCategory[x.fullCategory.length - 1]))];
		const embed = new MessageEmbed()
		.setColor('GREEN');
		for(let category of categories) {
			const commands = this.container.stores.get('commands').filter(x => x.category == category);
			embed.fields.push({
				name: `${(category as string)}`,
				value: commands.map(x => `\`${x.name}\``).join(', '),
				inline: false
			})
		}
		return message.channel.send({ embeds: [embed] });
	}
}
