// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
