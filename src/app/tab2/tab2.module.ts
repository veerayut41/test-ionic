import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { FoodListComponent } from './food-list/food-list.component';
import { UpdateModalComponent } from './modal/update-modal/update-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, OrderDetailComponent, EditOrderComponent, AddOrderComponent, FoodListComponent, UpdateModalComponent]
})
export class Tab2PageModule { }
