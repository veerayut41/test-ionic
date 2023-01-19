import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  selectSegment: string = 'food';

  constructor(public router: Router) { }

  ngOnInit() {
  }

  backToHomePage() {
    this.router.navigate(['tabs']);
  }


  foodMenuAct: boolean = false;
  cateAct: boolean = false;
  foodOption: boolean = true;

  segmaentChange(event: any) {
    this.selectSegment = event.target.value;
  }

}