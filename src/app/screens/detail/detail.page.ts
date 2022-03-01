import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart-item.model';
import { FoodService } from './../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  food: Food;
  heart: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private toastCtr:ToastController
  ) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id);
  }


  additemtocart(){
    const cartitem: CartItem = {
      id: this.food.id,
      name: this.food.title,
      price: this.food.price,
      image: this.food.image,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
  }

  favorit(){
    this.heart = !this.heart;
  }

  async presentToast(){
    const toast = await this.toastCtr.create({
      message: 'Food added to the cart',
      mode: 'ios',
      duration: 1000,
      position: 'top'
    });

    toast.present();
  }
}
