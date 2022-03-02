import { Listener } from "@sapphire/framework";
import type { Client, Message } from 'discord.js';

export class messageCreateEvent extends Listener {
    public async run(message: Message) {
        // console.log(`${message.author?.tag}: ${message.content}`);
        if(message.author?.bot) return;
        if(!message.content.toLowerCase()?.startsWith(this.container.client.config.Prefix)) return;
        
    }
}