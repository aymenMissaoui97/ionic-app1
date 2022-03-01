import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoyItemModule } from './../../components/category-item/category-item.module';
import { SearchbarModule } from './../../components/searchbar/searchbar.module';
import { FoodCardModule } from '../../components/food-card/food-card.module';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    CategoyItemModule,
    SearchbarModule,
    FoodCardModule
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
