"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const path_1 = require("path");
const config_1 = require("../config");
require("@sapphire/plugin-api/register");
class Client extends framework_1.SapphireClient {
    constructor(clientOptons) {
        super({
            allowedMentions: {
                users: [],
                repliedUser: false
            },
            defaultPrefix: config_1.Prefix,
            baseUserDirectory: (0, path_1.join)(__dirname, '..'),
            caseInsensitiveCommands: true,
            caseInsensitivePrefixes: true,
            intents: [
                discord_js_1.Intents.FLAGS.GUILDS,
                discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
                discord_js_1.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
            ],
            ...clientOptons
        });
    }
}
exports.Client = Client;
