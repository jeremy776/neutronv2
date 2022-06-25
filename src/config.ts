import { ActivityType, ColorResolvable } from 'discord.js';

export const Prefix: string = process.env.prefix || ".";
export const Token: string = process.env.token || "NzAyODc0MDI1MTg5MTc5NTMz.GpoaZs.IvbS6onHnTem-jSoKzGw797u4kz6pUklOOYKNY";
export const Activity: string = "on Development";
export const BotActivityType: Exclude<ActivityType, "CUSTOM"> = "STREAMING";
export const Color: Exclude<ColorResolvable, "HEX"> = "GREEN";
export const OPENAI = {
    api: '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',
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