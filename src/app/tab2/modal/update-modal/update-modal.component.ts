import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditOrderComponent } from '../../edit-order/edit-order.component';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  updateOrder() {
    this.modalCtrl.dismiss();
    this.goEditModal();

  }

  async goEditModal() {
    const modal = await this.modalCtrl.create({
      component: EditOrderComponent
    })

    return await modal.present();
  }

}
