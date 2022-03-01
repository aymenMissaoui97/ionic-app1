import { Food } from './../models/food.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FoodService {
    getFoods(): Food[] {
        return [
            {
                id: 1,
                title: 'pizza',
                price:12,
                image:'assets/pics/pizza.jpg',
                description:'In addition to the freshet seafood, there are corn, cilantro, and tomatoes'
            },
            {
                id: 2,
                title: 'pizza',
                price:21,
                image:'assets/pics/pizza.jpg',
                description:'In addition to the freshet seafood, there are corn, cilantro, and tomatoes'
            },
            {
                id: 3,
                title: 'pasta',
                price:16,
                image:'assets/pics/pasta.jpg',
                description:'In addition to the freshet seafood, there are corn, cilantro, and tomatoes'
            },
            {
                id: 4,
                title: 'pasta',
                price:12,
                image:'assets/pics/pasta.jpg',
                description:'In addition to the freshet seafood, there are corn, cilantro, and tomatoes'
            },
            {
                id: 5,
                title: 'berger',
                price:21,
                image:'assets/pics/berger.jpg',
                description:'In addition to the freshet seafood, there are corn, cilantro, and tomatoes'
            },
            {
                id: 6,
                title: 'berger',
                price:16,
                image:'assets/pics/berger.jpg',
                description:'In addition to the freshet seafood, there are corn, cilantro, and tomatoes'
            },
        ];
    }

    getFood(id: number): Food {
        return this.getFoods().find((Food) => Food.id = id);
    }
}