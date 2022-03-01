import { FoodService } from './../../services/food.service';
import { Category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) { }

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

  goToDetailPage(id: number){
    this.router.navigate(['detail', id]);
  }

}
