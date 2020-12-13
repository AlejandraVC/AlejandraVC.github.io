import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuDayComponent } from './components/menu/menu-day/menu-day.component';
import { MenuWeekComponent } from './components/menu/menu-week/menu-week.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    LogInComponent,
    HomeComponent,
    MenuComponent,
    MenuDayComponent,
    MenuWeekComponent,
    NotFoundComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
