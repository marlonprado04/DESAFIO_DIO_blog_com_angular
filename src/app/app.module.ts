import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { MediumCardComponent } from './components/medium-card/medium-card.component';
import { TextCardComponent } from './components/text-card/text-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BannerComponent,
    MediumCardComponent,
    TextCardComponent,
    SmallCardComponent,
    BigCardComponent,
    MenuCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
