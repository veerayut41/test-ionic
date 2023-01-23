import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {

  selectSegment: string = 'all';

  constructor(public router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit() { }

  segmaentChange(event: any) {
    this.selectSegment = event.target.value;
  }

  dissmiss() {
    this.modalCtrl.dismiss();
  }
}
