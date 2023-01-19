import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent implements OnInit {


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  customCate = {
    header: 'หมวดหมู่',
    translucent: true,
  };

  customOptions = {
    header: 'ตัวเลือกเสริม',
    translucent: true,
  };

  // async addOption() {
  //   this.dismiss();

  //   const modal = await this.modalCtrl.create({
  //     component: AddOptionComponent
  //   })

  //   return await modal.present();
  // }

}