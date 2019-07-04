import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, NavigationExtras } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Observable<any[]>;
  texto:string = ""
  background:string = "warn"
  clientesCuartos: Observable<any[]>;
  clientesVisitas: Observable<any[]>;
  visitas: Observable<any[]>;
  clienteUsuario:string = ""
  panelOpenState = false;
  width:any
  height:any
  existeFavorito:boolean = false
  constructor(public afDB: AngularFireDatabase, private router: Router) {
    this.clientes = this.afDB.list('registro').valueChanges()
    this.visitas = this.afDB.list('registroVisitas').valueChanges()
    this.width = screen.width;
    this.height = screen.height
    console.log(this.width, this.height);
    
  }

  ngOnInit() {
  }
  getCliente(cliente:string, clave:string){
    this.clienteUsuario = cliente+"-"+clave
    //console.log(this.clienteUsuario);
    let fav = this.clientesCuartos = this.afDB.list(`registro/${this.clienteUsuario}/Favoritos`).valueChanges()
    console.log(fav);
    
    if(typeof(fav) != "undefined"){
      this.existeFavorito = true
    }
    else{
      this.existeFavorito = false
    }
  }
  getCliente2(cliente:string, clave:string){
    this.clienteUsuario = cliente+"-"+clave
    //console.log(this.clienteUsuario);
    this.clientesCuartos = this.afDB.list(`reservacionDetalle/${this.clienteUsuario}`).valueChanges()
    this.clientesVisitas = this.afDB.list(`registroVisitas/${cliente}/reservado`).valueChanges()
  }
  getCliente3(cliente:string){
    this.clienteUsuario = cliente
    //console.log(this.clienteUsuario);
    this.clientesCuartos = this.afDB.list(`reservacionDetalle/${this.clienteUsuario}`).valueChanges()
    this.clientesVisitas = this.afDB.list(`registroVisitas/${cliente}/reservado`).valueChanges()
  }
  nextPage(nombre:string, clave:string){
    let navegar: NavigationExtras = {
      state:{
        valor: {
          nombre,
          clave
        }
      }
    };
    this.router.navigate(['datospersonales'], navegar);
  }

  verDatosPersonales(cliente:string, clave:string){
    this.clienteUsuario = cliente+"-"+clave
    let user = this.afDB.list(`registro/${this.clienteUsuario}/DatosPersonales`).valueChanges()
    console.log(user['nombre']);
    
  }
  print(text:string){
    console.log(text);
  }
  buscarCliente(cliente:string, clave:string){

  }


}
