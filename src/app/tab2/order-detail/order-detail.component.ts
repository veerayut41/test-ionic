import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { EditOrderComponent } from '../edit-order/edit-order.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {

  result!: string;

  constructor(private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    public router: Router,
    private alertController: AlertController) { }

  ngOnInit() { }

  async editModal() {
    const modal = await this.modalCtrl.create({
      component: EditOrderComponent
    })

    return await modal.present();
  }

  async onEdit() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          cssClass: 'alertOrderDetail',
          text: 'แก้ไขคำสั่งซื้อ',
          data: {
            action: 'confirm',

          }, handler: () => {
            this.modalCtrl.dismiss();
            // this.router.navigate(['tabs/tab2/editorder']);
            this.editModal();
          }
        },
        {
          text: 'ยกเลิกคำสั่งซื้อ',
          data: {
            action: 'cancel',
          }, handler: () => {

            this.cancelOrder();
          }
        },
        {
          text: 'ปิดออก',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

  async cancelOrder() {
    const alert = await this.alertController.create({
      header: 'ยืนยัน ยกเลิก คำสั่งซื้อ',
      subHeader: 'เหตุผลการยกเลิก',
      inputs: [
        {
          label: 'หมด',
          type: 'radio',
        },
        {
          label: 'อื่นๆ',
          type: 'radio',
        },
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            // this.dismiss();
          },
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.cancelAlert();
            // this.dismiss();
          },

        },
      ]

    });

    await alert.present();
  }

  async cancelAlert() {
    const alert = await this.alertController.create({
      message: 'ยกเลิกคำสั่งซื้อแล้ว',
      buttons: ['ปิดออก'],
    });

    await alert.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}