import { ActivityType } from 'discord.js';

export const Prefix: string = process.env.prefix || 'k!';
export const Token: string = process.env.token || 'NzAyODc0MDI1MTg5MTc5NTMz.XqGYcg.6ZESUg0VWd2s_syG56873jOS8xM';
export const Activity: string = 'on testing';
export const BotActivityType: Exclude<ActivityType, "CUSTOM"> = "STREAMING";
