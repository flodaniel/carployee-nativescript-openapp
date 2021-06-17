import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { OpenappComponent } from './openapp.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: OpenappComponent }])],
	declarations: [OpenappComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class OpenappModule {}
