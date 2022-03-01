import { CartItemComponent } from './cart-item.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CartItemComponent],
    imports: [ CommonModule, IonicModule ],
    exports: [CartItemComponent],
})
export class CartItemModule {}