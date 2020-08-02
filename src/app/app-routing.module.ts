import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { WelcomeComponent } from './components/welcome/welcome.component'
import { HomeComponent } from './components/home/home.component'
import { AboutMeComponent } from './components/about-me/about-me.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { ContactMeComponent } from './components/contact-me/contact-me.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
