import { CommandOptions, Command, Args } from '@sapphire/framework';
import { MessageEmbed, Message } from 'discord.js';
import { ApplyOptions } from '@sapphire/decorators';

@ApplyOptions<CommandOptions>({
	name: 'help',
	detailedDescription: "help [command]",
	aliases: ["help", "h"],
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
			.setFooter({ text: `<> = required | [] = optional`})
			.setAuthor({ name: `${command.name} Info` })
			.addField("Description", `<:reply_1:947503681719382066> ${command.description ? command.description : 'No Description'}`)
			.addField("Aliases", `<:reply_1:947503681719382066> \`${command.aliases.join(", ")}\``)
			.addField("Usage", `<:reply_1:947503681719382066> \`${this.container.client.fetchPrefix(message)}${command.detailedDescription}\``)
			return message.reply({ embeds: [emb] });
		}
		
		const categories = [...new Set(this.container.stores.get('commands').map(x => x.fullCategory[x.fullCategory.length - 1]))];
		const categoryEmoji = {
		  "utility": "<:utility:947773901998526488>",
		  "economy": "<:coin:947526776077287465>",
		  "information": "<:info:947920627505958935>",
		  "valorant": "<:premium:948448712173166653>"
		}
		const embed = new MessageEmbed()
		.setDescription(`・My global prefix is \`${this.container.client.options.defaultPrefix}\`\n<:reply_1:947503681719382066>・Type \`${this.container.client.fetchPrefix(message)}help [command]\` for more info command`)
		.setAuthor({ name: `${this.container.client.user?.username}`, iconURL: `${this.container.client.user?.displayAvatarURL()}` })
		.setColor(this.container.client.config.Color);
		for(let category of categories) {
			const commands = this.container.stores.get('commands').filter(x => x.category == category);
			embed.fields.push({
				//@ts-ignore
				name: `${categoryEmoji[category.toLowerCase()]} ・ ${(category as string)}`,
				value: commands.map(x => `\`${x.name}\``).join(', '),
				inline: false
			})
		}
		return message.reply({ embeds: [embed] });
	}
}
