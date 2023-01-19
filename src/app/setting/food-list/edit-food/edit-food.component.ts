import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss'],
})
export class EditFoodComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  customCate = {
    header: 'หมวดหมู่',
    translucent: true,
  };

  customOptions = {
    header: 'ตัวเลือกเสริม',
    translucent: true,
  };

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async onDelete() {
    const alert = await this.alertController.create({
      cssClass: 'alert-delete',
      message: 'ยืนยันการลบ "Strawberry sundae" ออกจากรายการอาหารใช่หรือไม่ ?',
      buttons: [
        {
          cssClass: 'alert-delete-cancel',
          text: 'ยกเลิก',
          role: 'cancel',

        },
        {
          cssClass: 'alert-delete-confirm',
          text: 'ใช่',
          handler: () => {
            this.modalCtrl.dismiss();
          },
        },
      ],
    });

    await alert.present();
  }

  //toast delete
  // async toastDelete(position: 'middle') {
  //   const toast = await this.toastController.create({
  //     message: 'ลบรายการอาหารสำเร็จแล้ว',
  //     duration: 1500,
  //     position: position
  //   });

  //   await toast.present();
  // }
}
