import { SapphireClient, SapphireClientOptions } from '@sapphire/framework';
import { Intents } from 'discord.js';
import { join } from 'path';
import { Prefix } from '../config';
import "@sapphire/plugin-api/register";

export class Client extends SapphireClient {
	public constructor(clientOptons?: SapphireClientOptions) {
		super({
			allowedMentions: {
				users: [],
				repliedUser: false
			},
			defaultPrefix: Prefix,
			baseUserDirectory: join(__dirname, '..'),
			caseInsensitiveCommands: true,
			caseInsensitivePrefixes: true,
			intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MESSAGES,
				Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
			],
			...clientOptons
		});
	}
}
