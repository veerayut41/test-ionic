import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AddOrderComponent } from '../add-order/add-order.component';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss'],
})
export class EditOrderComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    public router: Router,
    private alertController: AlertController) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async addOrder() {
    const modal = await this.modalCtrl.create({
      component: AddOrderComponent
    })

    return await modal.present();
  }

  dissmiss() {
    this.router.navigate(['tabs/tab2']);
  }

  async onUpdate() {
    const alert = await this.alertController.create({
      header: 'ยืนยันอัปเดทแก้ไขคำสั่งซื้อ?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'ยกเลิก',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'ใช่',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

  async onDelete() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการลบ "Strawberry sundae" ออกจากรายการใช่หรือไม่ ?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'ยกเลิก',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'ใช่',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
}