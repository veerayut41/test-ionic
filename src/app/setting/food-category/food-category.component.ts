import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.scss'],
})
export class FoodCategoryComponent implements OnInit {

  inputCate = false;
  show = true;

  constructor(private modalCtrl: ModalController,
    private alertController: AlertController) { }

  ngOnInit() { }

  // async editCate() {
  //   const modal = await this.modalCtrl.create({
  //     component: EditCateComponent
  //   })

  //   return await modal.present();
  // }

  // async addCate() {
  //   const modal = await this.modalCtrl.create({
  //     component: AddCateComponent
  //   })

  //   return await modal.present();
  // }

  async alertOnDelete() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการลบ "ไอศกรีม" ออกจากรายการหมวดหมู่ใช่หรือไม่ ?',
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

  insertCate() {
    this.inputCate = true;
  }

}

