import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ItenaryComponent } from './itenary/itenary.component';
import { PlacesPeopleComponent } from './places-people/places-people.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    MainLayoutComponent,
    ItenaryComponent,
    PlacesPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
