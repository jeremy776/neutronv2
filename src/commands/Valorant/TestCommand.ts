import { Command, CommandOptions } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Message } from 'discord.js';
import { Locales } from 'node-valorant-api';

@ApplyOptions<CommandOptions> ({
    'name': 'test'
})

export class TestCommand extends Command {
    async messageRun(msg: Message) {
        this.container.client.valorant.ContentV1.getContent(Locales['en-US']).then(x => {
            console.log(x.characters.map(y => y.name));
        })
        return msg.reply('p')
    }
}