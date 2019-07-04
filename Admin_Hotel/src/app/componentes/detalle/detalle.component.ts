import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
valor:any
usuario:string = ""
datos = []
reservacion:Observable<any[]>
  constructor(public route:ActivatedRoute, public router:Router, public afDB:AngularFireDatabase) {
    this.route.queryParams.subscribe((parametro)=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.valor = this.router.getCurrentNavigation().extras.state.valor;
      }
    })
  }

  ngOnInit() {
    this.usuario = `${this.valor['nombre']}-${this.valor['clave']}`
    this.reservacion = this.afDB.list(`reservacionDetalle/${this.usuario}/${this.valor['cuarto']}`).valueChanges()
    
  }
  
  

}
