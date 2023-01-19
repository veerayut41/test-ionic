import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(private modalCtrl: ModalController) { }

  async historyDetail() {
    const modal = await this.modalCtrl.create({
      component: HistoryComponent
    })

    return await modal.present();
  }

  // async openOne() {
  //   const modal = await this.modalCtrl.create({
  //     component: OneHistoryComponent
  //   })

  //   return await modal.present();
  // }

}
