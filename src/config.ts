import { ActivityType, ColorResolvable } from 'discord.js';

export const Prefix: string = process.env.prefix || ".";
export const Token: string = process.env.token;
export const Activity: string = "on Development";
export const BotActivityType: Exclude<ActivityType, "CUSTOM"> = "STREAMING";
export const Color: Exclude<ColorResolvable, "HEX"> = "GREEN";
export const OPENAI = {
    api: 'API OPEN AI',
    model: 'text-davinci-002'
}

export default {
    Prefix,
    Token,
    Activity,
    BotActivityType,
    Color,
    OPENAI
}
