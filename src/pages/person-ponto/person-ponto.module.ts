import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonPontoPage } from './person-ponto';

@NgModule({
  declarations: [
    PersonPontoPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonPontoPage),
  ],
})
export class PersonPontoPageModule {}
