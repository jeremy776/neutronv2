import {
  SapphireClient,
  SapphireClientOptions
} from '@sapphire/framework';
import {
  Intents
} from 'discord.js';
import {
  join
} from 'path';
import {
  Prefix
} from '../config';
import config from '../config';
import "@sapphire/plugin-api/register";
import {
  Configuration,
  OpenAIApi
} from 'openai';

const configuration = new Configuration({
  apiKey: config.OPENAI.api
});
let openAi = new OpenAIApi(configuration);

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
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
      ],
      api: {
        auth: {
          id: "702874025189179533",
          secret: "byXbKnnKXuT68pR3bnZDFjRSdf6lMSDk",
          cookie: "AUTH",
          redirect: "",
          scopes: ["identify"],
          transformers: []
        },
        origin: "*",
        prefix: "/",
        listenOptions: {
          port: 3000
        }
      },
      partials: ["REACTION", "MESSAGE", "CHANNEL", "USER", "GUILD_MEMBER"],
      ...clientOptons
    });
  }
  public config = config;
  public openai = openAi;
}

declare module "@sapphire/framework" {
  export interface SapphireClient {
    config: typeof config;
    openai: typeof openAi;
  }
}