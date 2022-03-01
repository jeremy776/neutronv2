import { createUser, getUser } from "../../controller/User.Controller";
import { Command, CommandOptions, Args } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { Message, MessageEmbed } from "discord.js";

@ApplyOptions<CommandOptions> ({
  name: "daily",
  aliases: ["daily"],
  detailedDescription: "daily",
  enabled: false,
  description: "get daily coins every day. if you miss 1 day then the daily streak will be reset back to the first day",
  requiredClientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"]
})

export class DailyCommand extends Command {
  async messageRun(message: Message, args: Args) {
    let data = await getUser(message.author?.id);
    let userdata;
    if(data.length == 0) {
      userdata = await createUser(message);
    } else {
      userdata = data[0];
    }
    
    let random = Math.floor(Math.random() * 20000)+2000;
    
    let embed = new MessageEmbed()
    .setColor("GREEN")
    .setAuthor({ name: `${message.author?.username.toUpperCase()} Daily coin` })
    .setDescription(`・**${random.toLocaleString()}** has been added to your wallet\n<:reply_2:947503649125457980>・Your next daily is ready in\n<:reply_1:947503681719382066>・**23 Hours**, **59 Minutes**, and **59 Seconds**`)
    return message.reply({ embeds: [embed] })
  }
}