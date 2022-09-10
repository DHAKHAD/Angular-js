import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithCliComponent } from './with-cli/with-cli.component';
import { WithoutCliComponent } from './without-cli/without-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    WithCliComponent,
    WithoutCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
