import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() open: boolean = false;

  valRang: string;

  constructor(
    private modalController: ModalController,
    private platform: Platform,
    private router: Router
    ) {
      this.platform.ready().then(()=>{
        this.valRang = '500';
      })
     }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public customFormatter(value: number) {
    console.log(value);
    return `${value}`;
  }

}
