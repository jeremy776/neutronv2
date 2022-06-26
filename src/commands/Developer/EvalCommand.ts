import { Command, CommandOptions, Args } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { Message, MessageEmbed } from "discord.js";

@ApplyOptions<CommandOptions> ({
  name: "eval",
  aliases: ["eval", "ev", "e"]
})

export class EvalCommand extends Command {
  public constructor(ctx: Command.Context, options: Command.Options) {
    super(ctx, {
      ...options,
      flags: true,
      chatInputCommand: {
        register:true
      }
    })
  }
  
  async chatInputRun(interaction: Command.ChatInputInteraction) {
    return interaction.reply({content: "hello world"});
  }
  
  async messageRun(msg: Message, args: Args) {
    try {
      if(!["428922145108656139", "679652448058867753"].includes(msg.author.id)) return;
      let evalute = await args.rest("string");
      console.log(evalute)
      let isAsync = await args.getFlags("async");
      let message = msg;
      if(!evalute) {
        throw new TypeError("Eval commad cannot execute without input.")
      }
      
      if(isAsync) {
        evalute = `(async () => {${evalute}})()`;
      }
      
      let { evals, type } = await this.parseEval(eval(evalute));
      if(typeof evals !== "string") evals = require("util").inspect(evals, {
        depth: 0
      });
      return msg.reply(`\`\`\`js\n${evals}\`\`\``)
    } catch(e) {
      msg.reply(`\`\`\`js\n${e}\`\`\``)
      return;
    }
  }
  
  private async parseEval(input: String) {
    const isPromise = input instanceof Promise && typeof input.then === "function" && typeof input.catch === "function";
    if(isPromise) {
      input = await input;
      return {
        evals: input,
        type: `Promise<${this.parseType(input)}>`
      }
    }
    return {
      evals: input,
      type: this.parseType(input)
    }
  }
  
  private parseType(input: String) {
    if(input instanceof Buffer) {
      let length = Math.round(input.length / 1024 / 1024);
      let ic = "MB";
      if (!length) {
        length = Math.round(input.length / 1024);
        ic = "KB";
      }
      if (!length) {
        length = Math.round(input.length);
        ic = "Bytes";
      }
      return `Buffer (${length} ${ic})`;
    }
    return input === null || input === undefined ? "Void": input.constructor.name;
  }
}
