import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorariosUserPage } from './horarios-user';

@NgModule({
  declarations: [
    HorariosUserPage,
  ],
  imports: [
    IonicPageModule.forChild(HorariosUserPage),
  ],
})
export class HorariosUserPageModule {}
