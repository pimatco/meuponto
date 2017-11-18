import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PontosDomains } from '../../domains/pontos-domains';
import * as moment from 'momentjs/momentjs';
import * as firebase from 'firebase';
import { AngularFireModule } from "angularfire2";
import { DatePipe } from '@angular/common';
import { timers } from 'angular-timer';
import { AngularFireDatabase} from "angularfire2/database"; 
import { AngularFireDatabaseModule} from "angularfire2/database"; 
import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { HorariosUserPage } from '../horarios-user/horarios-user';

import { FirebaseListObservable } from "angularfire2/database-deprecated";
/**
 * Generated class for the PersonPontoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-personponto',
  templateUrl: 'person-ponto.html',
})


export class PersonPontoPage {
  
  items: Observable<any>;                      
    public agendamentoDomains: PontosDomains;
    private _nome: string;
    private _data: string;
 
   
    
  constructor(public dbm: AngularFireDatabaseModule, public af: FirebaseProvider, public firebaseProvider: FirebaseProvider, public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) 
  {
    //this.accounts = this.db.listAccounts();
    //this.shoppingItems = db.list('users').valueChanges();

    this.agendamentoDomains = this.navParams.get('compromissoSelecionado');
    this._nome = this.agendamentoDomains.nome;

    this._data = this.agendamentoDomains.data;
    var date = moment().format('L');
    this.items = db.list('/users/'+this._nome+'/'+ date).valueChanges();
    var t = this.items;
    //console.log(this._nome);
    //console.log(t);
    
    this.items.subscribe(items => {
      // items is an array
      items.forEach(item => {
         // console.log(item.date);
         // console.log(item.name);
          //console.log(item.hora);
          var h = item.hora;
          var s = item.status;
          var d = this.firebaseProvider.getChild(item.name, item.date);
          console.log(d);
          var e = this.firebaseProvider.getMore(item.name, item.date);
          console.log(d);
          
      });
  });
  }

  //pegar dia
  //pegar entrada 1,2,3,4
  //fazer diferença

  

  entrada(){

    var m = "Entrada";
   
    let confirm = this.alertCtrl.create({
      title: 'Confirmar?',
      message: m,
      buttons: [
        {
          text: 'Saída',
          handler: () => {
            console.log('Disagree clicked');
           
          }
          
        },
        {
          text: 'Sim',
          handler: () => {
            
            console.log('Agree clicked');
          
            moment.locale('pt-br');
            var date = moment().format('L');
            var time = moment().format('LTS');
            
           
           // this.firebaseProvider.addItem(this.newItem);
           // this.firebaseProvider.addItem(dt, this._nome, dia);
           // this.firebaseProvider.updateItem(this._nome, dia);
            
           this.firebaseProvider.writeNewPost(date, time, this._nome, m);
          }
        }
      ]
    });
    confirm.present();
  }

  saida(){
    
        var m = "Saída";
     
        let confirm = this.alertCtrl.create({
          title: 'Confirmar?',
          message: m,
          buttons: [
            {
              text: 'Saída',
              handler: () => {
                console.log('Disagree clicked');
               
              }
              
            },
            {
              text: 'Sim',
              handler: () => {
                
                console.log('Agree clicked');
              
                moment.locale('pt-br');
                var date = moment().format('L');
                var time = moment().format('LTS');
                
               
               // this.firebaseProvider.addItem(this.newItem);
               // this.firebaseProvider.addItem(dt, this._nome, dia);
               // this.firebaseProvider.updateItem(this._nome, dia);
              
               this.firebaseProvider.writeNewPost(date, time, this._nome, m);
              }
            }
          ]
        });
        confirm.present();
      }

 


  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  //get difference between two hours
  getDifference(now, then){

    now;
    then;
    
    var ms = moment(now,"HH:mm:ss").diff(moment(then,"HH:mm:ss"));
    var d = moment.duration(ms);
    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    
  }

  ionViewDidLoad()
  {
   
    
  }


  salvaHora(hora) {
    
        
  }
  

  
  horarios(compromisso) {
    
    this.navCtrl.push(HorariosUserPage, { compromissoSelecionado: compromisso } );
  }
  



}

