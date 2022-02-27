import { Listener, ListenerOptions } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Activity, BotActivityType } from '../config';

@ApplyOptions<ListenerOptions>({
	name: 'ready',
	once: true
});

export class readyEvent extends Listener {
	run() {
		this.container.user?.setActivity({
			name: Activity,
			type: BotActivityType
		});
		return console.log(`${this.container.user?.tag} ready!`);
	}
}
