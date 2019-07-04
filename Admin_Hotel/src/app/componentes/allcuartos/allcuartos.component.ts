import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-allcuartos',
  templateUrl: './allcuartos.component.html',
  styleUrls: ['./allcuartos.component.css']
})
export class AllcuartosComponent implements OnInit {
  dobles: Observable<any[]>;
  familiares: Observable<any[]>;
  matrimoniales: Observable<any[]>;
  suites: Observable<any[]>;
  disponibles: Observable<any[]>;
  ocupados: Observable<any[]>;
  background:string = "warn"
  constructor(public afDB: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
    this.dobles = this.afDB.list(`cuartos/Dobles`).valueChanges()
    this.familiares = this.afDB.list(`cuartos/Familiares`).valueChanges()
    this.matrimoniales = this.afDB.list(`cuartos/Matrimoniales`).valueChanges()
    this.suites = this.afDB.list(`cuartos/Suites`).valueChanges()
    this.disponibles = this.afDB.list(`disponibles`).valueChanges()
    this.ocupados = this.afDB.list(`ocupados`).valueChanges()
  }
  nextPage(object:any){
    let navegar: NavigationExtras = {
      state:{
        valor: {
          object
        }
      }
    };
    this.router.navigate(['roomselected'], navegar);
  }

}
