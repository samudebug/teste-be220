import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';


import { HomePage } from './home.page';
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { HorizontalListComponent } from "../horizontal-list/horizontal-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ProfileCardComponent, HorizontalListComponent]
})
export class HomePageModule {}
