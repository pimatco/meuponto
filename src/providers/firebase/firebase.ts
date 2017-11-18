import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/do';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { PontosDomains } from '../../domains/pontos-domains';

import { AngularFireAuth} from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
@Injectable()
export class FirebaseProvider {
  items: Observable<any[]>;
  public agendamentoDomains: PontosDomains;
  constructor(public afd: AngularFireDatabase ) {
    
   }
 
  getItems(nome, data) {
    return this.afd.list('/users/' + nome + '/' + data + '/' + status );
  }
 
  addItem(time, nome, dia) {
    this.afd.object('/users/'+ nome +'/').set({mes: time, ano: 2017, dia: dia});
    
   // this.afd.list('/users/'+ name +'/').push(time);
    //this.afd.list('/users/'+nome).push(nome);
    //this.afd.object('/users/'+nome+'/horarios/').set(time);
    console.log('/users/'+nome+'/horarios/'+time);
    //const itemRef = this.afd.object('/users/'+nome+'/horarios/'+date);
    //itemRef.set({ time});
  }

 

  writeNewPost(data, time, nome, m) {
   
    // Get a key for a new Post.
  firebase.database().ref('/users/' + nome + '/' + data ).push().set({
    hora: time,
    name: nome,
    date: data,
    status: m
  });
  }
  
  getChild(nome, data){
  
    var ref = firebase.database().ref('/users/' + nome + '/' + data + '/status/').child("status");
  }
 
 
  removeItem(id) {
    this.afd.list('/users/').remove(id);
  }
  updateItem(nome, dia) {
    const itemRef =this.afd.object('/users/'+ nome +'/');
    itemRef.update({ dia: "teste" });
  }

  test(nome){
  
    var t = this.afd.list('/users/' + nome + '/').valueChanges();
    console.log(t);
  }
  
  
  getUsers(){
    
      return this.afd.list('/users/');
  
  }
  getMore(nome, data){
    
      return this.afd.list('/users/' + nome + '/' + data );
  
  }
}