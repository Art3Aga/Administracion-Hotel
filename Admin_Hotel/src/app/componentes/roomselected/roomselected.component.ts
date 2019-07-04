import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-roomselected',
  templateUrl: './roomselected.component.html',
  styleUrls: ['./roomselected.component.css']
})
export class RoomselectedComponent implements OnInit {
  valor:Observable<any>
  colorSlide:string ="primary"
  estado:boolean = false
  state:string = ""
  constructor(public route: ActivatedRoute, public router:Router, public afDB: AngularFireDatabase) { 
    this.route.queryParams.subscribe((parametro)=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.valor = this.router.getCurrentNavigation().extras.state.valor;
      }
    })
  }

  ngOnInit() {
    //console.log(this.valor);
    if(this.valor['object']['estado'] == "Disponible"){
      this.estado = true
      this.state = "Disponible"
    }
    else{
      this.estado = false
      this.state = "Ocupado"
    }
  }

  saveCambios(){
    let cuarto:any = {
      titulo: this.valor['object']['titulo'],
      descrip: this.valor['object']['descrip'],
      categoria: this.valor['object']['categoria'],
      detalle1: this.valor['object']['detalle1'],
      detalle2: this.valor['object']['detalle2'],
      detalle3: this.valor['object']['detalle3'],
      estado: this.state,
      favoritos: this.valor['object']['favoritos'],
      imgScroll1: this.valor['object']['imgScroll1'],
      imgScroll2: this.valor['object']['imgScroll2'],
      imgScroll3: this.valor['object']['imgScroll3'],
      imgScroll4: this.valor['object']['imgScroll4'],
      medidaCama: this.valor['object']['medidaCama'],
      medidaCuarto: this.valor['object']['medidaCuarto'],
      precioTotal: this.valor['object']['precioTotal'],
      precio24h: this.valor['object']['precio24h'],
      llegada: this.valor['object']['llegada'],
      salida: this.valor['object']['llegada'],
      imgPrincipal: this.valor['object']['imgPrincipal'],
    }
    //let categoria:string = JSON.stringify(this.valor['object']['categoria'])
    let titulo:string = JSON.stringify(this.valor['object']['titulo'])
        if(this.state == "Ocupado"){
          this.afDB.object(`ocupados/${this.valor['object']['titulo']}`).update({
            titulo: this.valor['object']['titulo'],
            descrip: this.valor['object']['descrip'],
            categoria: this.valor['object']['categoria'],
            detalle1: this.valor['object']['detalle1'],
            detalle2: this.valor['object']['detalle2'],
            detalle3: this.valor['object']['detalle3'],
            estado: this.state,
            favoritos: this.valor['object']['favoritos'],
            imgScroll1: this.valor['object']['imgScroll1'],
            imgScroll2: this.valor['object']['imgScroll2'],
            imgScroll3: this.valor['object']['imgScroll3'],
            imgScroll4: this.valor['object']['imgScroll4'],
            medidaCama: this.valor['object']['medidaCama'],
            medidaCuarto: this.valor['object']['medidaCuarto'],
            precioTotal: this.valor['object']['precioTotal'],
            precio24h: this.valor['object']['precio24h'],
            llegada: this.valor['object']['llegada'],
            salida: this.valor['object']['llegada'],
            imgPrincipal: this.valor['object']['imgPrincipal'],
          })
          //this.afDB.object(`disponibles/${titulo}/${room}`).remove()        
          //this.afDB.database.ref('disponibles').child(`${titulo}`).child(room).remove()
          //this.afDB.database.ref('disponibles/'+titulo+'/'+cuarto).remove()
          //this.afDB.database.ref('disponibles').child(titulo).child(cuarto).remove()
          this.afDB.database.ref(`disponibles/${this.valor['object']['titulo']}`).remove()
          alert('Cambios Realizados Correctamente')
        }
        else if(this.state == "Disponible"){
          this.afDB.object(`disponibles/${this.valor['object']['titulo']}`).update({
            titulo: this.valor['object']['titulo'],
            descrip: this.valor['object']['descrip'],
            categoria: this.valor['object']['categoria'],
            detalle1: this.valor['object']['detalle1'],
            detalle2: this.valor['object']['detalle2'],
            detalle3: this.valor['object']['detalle3'],
            estado: this.state,
            favoritos: this.valor['object']['favoritos'],
            imgScroll1: this.valor['object']['imgScroll1'],
            imgScroll2: this.valor['object']['imgScroll2'],
            imgScroll3: this.valor['object']['imgScroll3'],
            imgScroll4: this.valor['object']['imgScroll4'],
            medidaCama: this.valor['object']['medidaCama'],
            medidaCuarto: this.valor['object']['medidaCuarto'],
            precioTotal: this.valor['object']['precioTotal'],
            precio24h: this.valor['object']['precio24h'],
            llegada: this.valor['object']['llegada'],
            salida: this.valor['object']['llegada'],
            imgPrincipal: this.valor['object']['imgPrincipal'],
          })        
          //this.afDB.database.ref('ocupados/'+titulo+'/'+cuarto).remove()
          this.afDB.database.ref(`ocupados/${this.valor['object']['titulo']}`).remove()
          //this.afDB.database.ref('ocupados').child(titulo).child(cuarto).remove()
          //this.afDB.database.ref(`ocupados/${this.valor['object']['titulo']}/${cuarto}`).remove()
          alert('Cambios Realizados Correctamente')
        }
  }

  nextPage(nombre:string, clave:string, cuarto:string){
    let navegar: NavigationExtras = {
      state:{
        valor: {
          nombre,
          clave,
          cuarto
        }
      }
    };
    this.router.navigate(['detalle'], navegar);
  }

}
