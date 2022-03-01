"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCommand = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const decorators_1 = require("@sapphire/decorators");
let HelpCommand = class HelpCommand extends framework_1.Command {
    async messageRun(message, args) {
        const userArgument = await args.restResult('string');
        if (userArgument.success) {
            const command = this.container.stores.get('commands').get(userArgument.value);
            if (!command)
                return;
            const emb = new discord_js_1.MessageEmbed()
                .setColor('GREEN')
                .setFooter({ text: `<> = required | [] = optional` })
                .setAuthor({ name: `${command.name} Info` })
                .addField("Description", `<:reply_1:947503681719382066> ${command.description ? command.description : 'No Description'}`)
                .addField("Aliases", `<:reply_1:947503681719382066> \`${command.aliases.join(", ")}\``)
                .addField("Usage", `<:reply_1:947503681719382066> \`${this.container.client.fetchPrefix(message)}${command.detailedDescription}\``);
            return message.reply({ embeds: [emb] });
        }
        const categories = [...new Set(this.container.stores.get('commands').map(x => x.fullCategory[x.fullCategory.length - 1]))];
        const categoryEmoji = {
            "utility": "<:utility:947773901998526488>",
            "economy": "<:coin:947526776077287465>"
        };
        const embed = new discord_js_1.MessageEmbed()
            .setDescription(`・My global prefix is \`${this.container.client.options.defaultPrefix}\`\n<:reply_1:947503681719382066>・Type \`${this.container.client.fetchPrefix(message)}help [command]\` for more info command`)
            .setAuthor({ name: `${this.container.client.user?.username}`, iconURL: `${this.container.client.user?.displayAvatarURL()}` })
            .setColor('GREEN');
        for (let category of categories) {
            const commands = this.container.stores.get('commands').filter(x => x.category == category);
            embed.fields.push({
                //@ts-ignore
                name: `${categoryEmoji[category.toLowerCase()]} ・ ${category}`,
                value: commands.map(x => `\`${x.name}\``).join(', '),
                inline: false
            });
        }
        return message.reply({ embeds: [embed] });
    }
};
HelpCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: 'help',
        detailedDescription: "help [command]",
        aliases: ["help", "h"],
        description: 'show command list',
        requiredClientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS']
    })
], HelpCommand);
exports.HelpCommand = HelpCommand;