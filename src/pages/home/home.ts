import {Component} from "@angular/core";
import { NavController, LoadingController} from 'ionic-angular';
import { OnInit } from '@angular/core';
import { PersonPontoPage } from '../person-ponto/person-ponto';
//import { Http } from '@angular/http';


import * as moment from 'momentjs/momentjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
 
  public agendamentos;
  public hora;
  public data;
  public todayDate;
  constructor(
    public navCtrl: NavController, 
    private loadingCtrl: LoadingController
    //private _http: Http,
    // private _alertCtrl: AlertController
  ) {
    
  }

      ngOnInit() {

      moment.locale("pt-br");
      this.hora = moment().format('LTS');
      this.data = moment().format('LL'); 

          this.agendamentos = [
            {
            nome: 'Matheus' 
            }

            
         ];

  }

  selecionaUser(compromisso) {
    
        this.navCtrl.push(PersonPontoPage, { compromissoSelecionado: compromisso } );
      }
     

}

