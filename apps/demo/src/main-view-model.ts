import { Observable, Frame, isIOS } from '@nativescript/core';
import { OpenApp } from '@carployee/openapp';
export class MainViewModel extends Observable {
	viewDemo(args) {
		Frame.topmost().navigate({
			moduleName: `plugin-demos/${args.object.text}`,
		});
	}

	/**
	 * @method openIoSCalendar
	 */
	public openIoSCalendar(): boolean {
		if (isIOS) {
			const isInstalled: boolean = OpenApp.open('calshow://');

			return isInstalled;
		}
		console.log('demo only available for ios');
		return false;
	}
}
