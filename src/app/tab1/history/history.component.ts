import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
