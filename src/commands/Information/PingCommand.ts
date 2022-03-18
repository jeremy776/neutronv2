import { Command, CommandOptions } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { Message } from "discord.js";

@ApplyOptions<CommandOptions> ({
  name: "ping",
  detailedDescription: "ping",
  description: "check latency bot",
  requiredClientPermissions: ["SEND_MESSAGES"]
})

export class PingCommand extends Command {
  async messageRun(msg: Message) {
    return msg.reply(`:ping_pong: Pong! \`${this.container.client.ws.ping}ms\``);
  }
}