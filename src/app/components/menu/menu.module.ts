import { MenuComponent } from './menu.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [MenuComponent],
    imports: [ CommonModule, IonicModule,FormsModule ],
    exports: [MenuComponent],
})
export class MenuModule {}