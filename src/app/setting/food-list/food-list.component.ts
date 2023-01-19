import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddFoodComponent } from './add-food/add-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  async addFood() {
    const modal = this.modalCtrl.create({
      component: AddFoodComponent
    });

    return (await modal).present();
  }

  async editFood() {
    const modal = this.modalCtrl.create({
      component: EditFoodComponent
    });

    return await (await modal).present();
  }

}
