import { IonicModule } from '@ionic/angular';
import { BadgeComponent } from './badge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [BadgeComponent],
    imports: [ CommonModule, IonicModule ],
    exports: [BadgeComponent],
})
export class BadgeModule {}