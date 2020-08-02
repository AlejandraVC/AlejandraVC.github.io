import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { NavComponent } from './components/nav/nav.component'
import { HomeComponent } from './components/home/home.component'
import { AboutMeComponent } from './components/about-me/about-me.component'
import { SkillsComponent } from './components/skills/skills.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { ContactMeComponent } from './components/contact-me/contact-me.component'
import { FooterComponent } from './components/footer/footer.component'

import { CarouselComponent } from './components/carousel/carousel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactMeComponent,
    FooterComponent,
    CarouselComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
