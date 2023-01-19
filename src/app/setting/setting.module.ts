import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { FoodOptionComponent } from './food-option/food-option.component';
import { AddFoodComponent } from './food-list/add-food/add-food.component';
import { EditFoodComponent } from './food-list/edit-food/edit-food.component';
import { AddOptionComponent } from './food-option/add-option/add-option.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule
  ],
  declarations: [SettingPage, FoodListComponent, FoodCategoryComponent, FoodOptionComponent, AddFoodComponent, EditFoodComponent, AddOptionComponent]
})
export class SettingPageModule { }
