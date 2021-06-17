import { Component, NgZone } from '@angular/core';
import { DemoSharedOpenapp } from '@demo/shared';
import {} from '@nativescript/openapp';

@Component({
	selector: 'demo-openapp',
	templateUrl: 'openapp.component.html',
})
export class OpenappComponent {
	demoShared: DemoSharedOpenapp;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedOpenapp();
	}
}
