import { FoodCardModule } from '../../components/food-card/food-card.module';
import { CategoyItemModule } from './../../components/category-item/category-item.module';
import { SearchbarModule } from './../../components/searchbar/searchbar.module';
import { SearchbarComponent } from './../../components/searchbar/searchbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchbarModule,
    CategoyItemModule,
    FoodCardModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
