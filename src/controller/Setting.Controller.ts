import Setting from '../models/Settings';
import type { Message } from 'discord.js';

export async function settingCreate(msg: Message, name: string) {
    const setting = await Setting.create({
        id: msg.author.id,
        settingName: name
    });
    return setting;
}

export async function getSetting(id: string, name: string) {
    const setting = Setting.findOne({
        id,
        settigName: name
    });
    return setting;
}