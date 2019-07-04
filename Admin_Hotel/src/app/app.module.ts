import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, 
  MatSidenavModule, MatListModule, MatTabsModule, MatGridListModule, MatExpansionModule,
  MatCardModule, MatSlideToggleModule, MatChipsModule, MatSliderModule,MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CuartosComponent } from './componentes/cuartos/cuartos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { DatospersonalesComponent } from './componentes/datospersonales/datospersonales.component';
import { AllcuartosComponent } from './componentes/allcuartos/allcuartos.component';
import { RoomselectedComponent } from './componentes/roomselected/roomselected.component';
import { BuscarPipe } from './pipes/buscar.pipe';
import { DetalleComponent } from './componentes/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CuartosComponent,
    ClientesComponent,
    DatospersonalesComponent,
    AllcuartosComponent,
    RoomselectedComponent,
    BuscarPipe,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,    
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatExpansionModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTableModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), 
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
