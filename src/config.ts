import { ActivityType } from 'discord.js';

export const Prefix: string = process.env.prefix || 'dev ';
export const Token: string = process.env.token || 'NjQ4MDcwNzAyMTIwOTYwMDEy.Xdo43w.8gA_MC8u1-mSCNlOU0nelDhiD8M';
export const Activity: string = 'on testing';
export const MongoDB: string = process.env.mongodb || 'mongodb+srv://jeremykusuma:christianjeremykusuma@cluster0.d0mjj.mongodb.net/boteconomy?retryWrites=true&w=majority';
export const BotActivityType: Exclude<ActivityType, "CUSTOM"> = "STREAMING";
