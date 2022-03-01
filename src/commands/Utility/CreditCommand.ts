import { Command, CommandOptions } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { MessageEmbed, Message } from "discord.js";

@ApplyOptions <CommandOptions> ({
  name: "credit",
  aliases: ["credit"],
  detailedDescription: "credit",
  description: "credit list",
  requiredClientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"]
})

export class CreditCommand extends Command {
  async messageRun(message: Message) {
    let list = [
      {
        name: "Icons",
        link: "https://discord.gg/C7T3uvDaMN"
      }
    ]
    
    let embed = new MessageEmbed()
    .setAuthor({ name: `List Credit - ${this.container.client.user?.username}` })
    .setColor(this.container.client.config.Color)
    .setTimestamp()
    list.map(x => {
      embed.fields.push({
        name: "> "+x.name,
        value: `**[Join Server](${x.link})**`,
        inline: false
      })
    })
    return message.reply({ embeds: [embed] })
  }
}