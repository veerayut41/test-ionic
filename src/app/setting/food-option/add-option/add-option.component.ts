import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.scss'],
})
export class AddOptionComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
