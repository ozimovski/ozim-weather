// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CurrentTemperatureComponent } from './components/current-temperature/current-temperature.component';
import { FiveDaysForecastComponent } from './components/five-days-forecast/five-days-forecast.component';
// pipes
import { UnixToIsodatePipe } from './shared/pipes/unix-to-isodate.pipe';
import { IconUrlPipe } from './shared/pipes/icon-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CurrentTemperatureComponent,
    FiveDaysForecastComponent,
    UnixToIsodatePipe,
    IconUrlPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
