"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceCommand = void 0;
const framework_1 = require("@sapphire/framework");
const decorators_1 = require("@sapphire/decorators");
const discord_js_1 = require("discord.js");
const User_Controller_1 = require("../../controller/User.Controller");
let BalanceCommand = class BalanceCommand extends framework_1.Command {
    async messageRun(message, args) {
        let data = await (0, User_Controller_1.getUser)(message.author.id);
        let userdata;
        if (data.length == 0) {
            userdata = await (0, User_Controller_1.createUser)(message);
        }
        else {
            userdata = data[0];
        }
        let embed = new discord_js_1.MessageEmbed()
            .setColor('GREEN')
            .setAuthor({ name: `${message.author?.username} Balance` })
            .addField('<:coin:947526776077287465>・Coin', `<:reply_1:947503681719382066>・**\`${userdata.balance?.toLocaleString()}\`**`)
            .addField('<:creditcard:947773232143032350>・Bank', `<:reply_1:947503681719382066>・**\`${userdata.bank?.toLocaleString()}\`** / **\`${userdata.maxBank?.toLocaleString()}\`**`);
        return message.reply({ embeds: [embed] });
    }
};
BalanceCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: 'balance',
        aliases: ['bal'],
        detailedDescription: 'bal [@user]',
        description: 'view the user coin amount',
        requiredClientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS']
    })
], BalanceCommand);
exports.BalanceCommand = BalanceCommand;
