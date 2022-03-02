import { SapphireClient, SapphireClientOptions } from '@sapphire/framework';
import { Intents } from 'discord.js';
import { join } from 'path';
import { Prefix } from '../config';
import config from '../config';
import { API, Regions, Locales, Queue, RiotAPIError } from "node-valorant-api";
import "@sapphire/plugin-api/register";

const valorant = new API(Regions.NA, 'RGAPI-e4691f04-379d-44cf-860e-e27abd83acfd', Regions.AMERICAS);

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
	public valorant = valorant;
	public config = config;
}

declare module "@sapphire/framework" {
	export interface SapphireClient {
		config: typeof config;
		valorant: typeof valorant;
	}
}