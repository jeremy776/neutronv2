import { Message, MessageEmbed } from "discord.js";
import { Command, CommandOptions, Args } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";

@ApplyOptions<CommandOptions> ({
  name: "avatar",
  aliases: ["avatar", "av", "ava"],
  description: "Viewing the avatar of the mentioned user",
  detailedDescription: "avatar [@user]",
  requiredClientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"]
})

export class AvatarCommand extends Command {
  async messageRun(message: Message, args: Args) {
    let userargs = await args.pickResult("user");
    let user;
    if(!userargs.success && userargs.error.identifier == "userError") return message.reply("uh, i cant find that user");
    if(userargs.success) user = userargs.value;
    else user = message.author;
    
    let embed = new MessageEmbed()
    .setTimestamp()
    .setAuthor({ name: `Avatar from ${user?.username}`})
    .setColor(this.container.client.config.Color)
    .setDescription(`[Link Avatar](${user.displayAvatarURL({dynamic: true, size: 2048, format: "png"})})`)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 2048, format: "png"}))
    return message.reply({ embeds: [embed] })
  }
}