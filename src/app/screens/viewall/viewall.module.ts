import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewallPageRoutingModule } from './viewall-routing.module';

import { ViewallPage } from './viewall.page';
import { FoodCardModule } from '../../components/food-card/food-card.module';
import { MenuModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewallPageRoutingModule,
    FoodCardModule,
    MenuModule
  ],
  declarations: [ViewallPage]
})
export class ViewallPageModule {}
