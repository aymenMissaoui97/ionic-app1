import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from './../../services/food.service';
import { Category } from './../../models/category.model';
import { Food } from 'src/app/models/food.model';
import { ModalController } from '@ionic/angular';
import { MenuComponent } from 'src/app/components/menu/menu.component';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.page.html',
  styleUrls: ['./viewall.page.scss'],
})
export class ViewallPage implements OnInit {
  name: string;
  categories: Category[] = [];
  foods: Food[] = [];
  filter: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private router: Router,
    private modalController: ModalController,
    ) { 
      this.name = this.activatedRoute.snapshot.paramMap.get('name');
    }

  ngOnInit() {
    console.log(this.name);
    this.getCategoris();
    this.foods = this.foodService.getFoods();
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: MenuComponent
    })
    await modal.present();
  }

  filtres(){
    console.log('filtres');
    this.filter = true;
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

}
