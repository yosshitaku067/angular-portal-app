import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopPageModule } from './pages/top-page/top-page.module';
import { ContentsPageModule } from './pages/contents-page/contents-page.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TopPageModule,
    ContentsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
