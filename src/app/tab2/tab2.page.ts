import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateModalComponent } from './modal/update-modal/update-modal.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(
    private modalCtrl: ModalController
  ) { }

  async onDetail() {
    const modal = await this.modalCtrl.create({
      component: OrderDetailComponent
    })

    return await modal.present();
  }

  // async onTestOneCus() {
  //   const modal = await this.modalCtrl.create({
  //     component: OneCustomerComponent
  //   })

  //   return await modal.present();
  // }

}