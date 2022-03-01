import User from '../models/User';
import type { Message } from 'discord.js';

export async function createUser(msg: Message) {
    const user = await User.create({
        id: msg.author?.id,
        username: msg.author?.username,
        discriminator: msg.author?.discriminator,
        daily: {
          count: 0,
          lastDaily: 0
        }
    });
    return user;
}

export async function getUser(id: string) {
    const user = await User.findByUserId(id);
    return user;
}