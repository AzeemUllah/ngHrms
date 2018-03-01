import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from 'dashboard/header/header.component';
import { SidebarComponent } from 'dashboard/sidebar/sidebar.component';
import { MessageBoxComponent } from 'dashboard/message-box/message-box.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
