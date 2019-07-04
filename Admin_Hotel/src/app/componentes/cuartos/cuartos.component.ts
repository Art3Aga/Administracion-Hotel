import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-cuartos',
  templateUrl: './cuartos.component.html',
  styleUrls: ['./cuartos.component.css']
})
export class CuartosComponent implements OnInit {
  items: Observable<any[]>;
  matrimoniales:Observable<any[]>
  suites:Observable<any[]>
  familiares:Observable<any[]>
  dobles:Observable<any[]>
  constructor(public afDB: AngularFireDatabase) { }

  ngOnInit() {
    this.matrimoniales = this.afDB.list('cuartos/Matrimoniales').valueChanges()
    this.suites = this.afDB.list('cuartos/Suites').valueChanges()
    this.familiares = this.afDB.list('cuartos/Familiares').valueChanges()
    this.dobles = this.afDB.list('cuartos/Dobles').valueChanges()
    console.log(this.matrimoniales);
    
  }

}
