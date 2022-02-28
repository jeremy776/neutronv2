import { Token, MongoDB } from './config';
import { Client } from './structures/Client';
import connect from './connect';

connect({ MongoDB });

const client = new Client();
client.login(Token);
