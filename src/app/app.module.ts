import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AdminComponent } from './admin/admin.component';
// import { AuthComponent } from './auth/auth.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
// para el servidor apirest
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    // AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
