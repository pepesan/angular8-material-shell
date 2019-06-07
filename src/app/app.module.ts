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
  MatFormFieldModule, MatInputModule, MatTabsModule, MatCheckboxModule, MatSelectModule, MatDatepickerModule, MatRadioModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuDesplegableComponent } from './demos/menu-desplegable/menu-desplegable.component';
import { SidenavSimpleComponent } from './demos/sidenav-simple/sidenav-simple.component';
import { ToolbarSimpleComponent } from './demos/toolbar-simple/toolbar-simple.component';
import { ToolbarComplejaComponent } from './demos/toolbar-compleja/toolbar-compleja.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {DataService} from './pages/data.service';
import { PartidosTableComponent } from './pages/partidos-table/partidos-table.component';
import {FormsModule} from '@angular/forms';
import {FormComponent} from './pages/form/form.component';
import {DetailComponent} from './pages/detail/detail.component';
import {FormDemoComponent} from './demos/form-demo/form-demo.component';
import {FormDemo2Component} from './demos/form-demo2/form-demo2.component';
import {FormLoginComponent} from './demos/form-login/form-login.component';
import {VirtualScrollComponent} from './demos/virtual-scroll/virtual-scroll.component';
import {DragDropComponent} from './demos/drag-drop/drag-drop.component';
import {FlexLayoutBasicComponent} from './demos/flex-layout-basic/flex-layout-basic.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';

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
    DetailComponent,
    FormDemoComponent,
    FormDemo2Component,
    FormLoginComponent,
    VirtualScrollComponent,
    DragDropComponent,
    FlexLayoutBasicComponent
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
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    DragDropModule,
    ScrollingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
