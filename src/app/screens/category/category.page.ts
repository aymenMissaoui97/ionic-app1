import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FoodService } from './../../services/food.service';
import { Category } from './../../models/category.model';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];
  name: string = 'All';

  constructor(
    private foodService: FoodService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategoris();
    this.foods = this.foodService.getFoods();
  }

  getCategoris(){
    this.categories =[
      {
        id:1,
        label: 'All',
        image:'assets/svg/sushi.svg',
        active:true
      },
      {
        id:2,
        label: 'Burger',
        image:'assets/svg/spicy.svg',
        active:false
      },
      {
        id:3,
        label: 'Dishes',
        image:'assets/svg/beef.svg',
        active:false
      },
      {
        id:4,
        label: 'Sushi',
        image:'assets/svg/sushi.svg',
        active:false
      }
    ];
  }

  category(item){
    console.log(item);
    console.log(item.active);
    item.active = true;
    this.name = item.label;
    this.categories.forEach(cat => {
      if(cat.id != item.id){
        cat.active = false;
      }
    });

  }

  viewall(){
    console.log('all');
    this.router.navigate(['viewall', this.name]);
  }

  goToDetailPage(id: number){
    this.router.navigate(['detail', id]);
  }
}
