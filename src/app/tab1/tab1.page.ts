import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  status = "เปิดร้าน";

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    public router: Router
  ) { }

  async openHistory() {
    const modal = await this.modalCtrl.create({
      component: HistoryComponent
    })

    return await modal.present();
  }

  newOrder() {
    this.router.navigate(['tabs/tab2']);
  }

  // customAlertOptions = {
  //   header: 'สถานะร้าน',
  //   translucent: true,
  // };


  // async ngStatus() {
  //   const modal = await this.modalCtrl.create({
  //     component: StatusComponent,
  //     initialBreakpoint: 0.6
  //   });

  //   return await modal.present();
  // }

  dismiss() {
    this.modalCtrl.dismiss();
  }


}
