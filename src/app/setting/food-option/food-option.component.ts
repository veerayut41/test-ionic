import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddOptionComponent } from './add-option/add-option.component';

@Component({
  selector: 'app-food-option',
  templateUrl: './food-option.component.html',
  styleUrls: ['./food-option.component.scss'],
})
export class FoodOptionComponent implements OnInit {

  show = true;

  constructor(private modalCtrl: ModalController,
    private alertController: AlertController) { }

  ngOnInit() { }

  async addOption() {
    const modal = await this.modalCtrl.create({
      component: AddOptionComponent
    })

    return await modal.present();
  }

  async onDelete() {
    const alert = await this.alertController.create({
      cssClass: 'alert-delete',
      message: 'ยืนยันการลบ "ระดับความหวาน" ออกจากตัวเลือกเสริมใช่หรือไม่ ?',
      buttons: [
        {
          cssClass: 'alert-delete-cancel',
          text: 'ยกเลิก',
          role: 'cancel',

        },
        {
          cssClass: 'alert-delete-confirm',
          text: 'ใช่',
          role: 'cancel'
        },
      ],
    });

    await alert.present();
  }

}
