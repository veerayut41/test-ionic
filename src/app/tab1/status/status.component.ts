import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }


  dismiss() {
    this.modalCtrl.dismiss();
  }
}