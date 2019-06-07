import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';
import { SidenavSimpleComponent } from './sidenav-simple/sidenav-simple.component';
import { ToolbarSimpleComponent } from './toolbar-simple/toolbar-simple.component';
import { ToolbarComplejaComponent } from './toolbar-compleja/toolbar-compleja.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {DataService} from './data.service';
import { PartidosTableComponent } from './partidos-table/partidos-table.component';
import {FormsModule} from '@angular/forms';
import {FormComponent} from './pages/form/form.component';
import {DetailComponent} from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDesplegableComponent,
    SidenavSimpleComponent,
    ToolbarSimpleComponent,
    ToolbarComplejaComponent,
    HomeComponent,
    AboutComponent,
    PartidosTableComponent,
    FormComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
