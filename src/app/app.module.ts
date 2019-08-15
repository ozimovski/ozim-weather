// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
