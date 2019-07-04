import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent implements OnInit {
  valor: any
  constructor(private route: ActivatedRoute, private router: Router,
      private _location: Location) { 
    this.route.queryParams.subscribe((parametro)=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.valor = this.router.getCurrentNavigation().extras.state.valor;
      }
    })
  }

  ngOnInit() {
    console.log(this.valor);
    
  }
  back() {
    this._location.back();
  }

}
