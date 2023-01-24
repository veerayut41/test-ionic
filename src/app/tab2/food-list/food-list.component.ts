import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateModalComponent } from '../modal/update-modal/update-modal.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {

  count = 0;
  price: number = 80;
  name = "Phichio";
  addCart = false;
  updateCart = false;

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() { }

  dismiss() {
    this.modal.dismiss();
  }

  increment() {
    if (this.count + 1 < 100) {
      this.count = this.count + 1;
    }
  }

  decrement() {
    if (this.count - 1 >= 0) {
      this.count = this.count - 1;
    }
  }

  onAddCart() {
    this.addCart = true;
    this.count * this.price;
    console.log("res", this.count * this.price);

  }

  onUpdateCart() {
    this.dismiss();
    this.updateCart = true;

  }

  async update() {
    this.modal.dismiss();
  }

}
