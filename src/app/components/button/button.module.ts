import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ButtonComponent],
    imports: [ CommonModule, IonicModule ],
    exports: [ButtonComponent],
})
export class ButtonModule {}