import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(
    private modalCtrl: ModalController
  ) { }

  // async onStatus() {
  //   const modal = await this.modalCtrl.create({
  //     component: OrderDetailsComponent
  //   })

  //   return await modal.present();
  // }

  // async onTestOneCus() {
  //   const modal = await this.modalCtrl.create({
  //     component: OneCustomerComponent
  //   })

  //   return await modal.present();
  // }



}