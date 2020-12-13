import { MenuWeekComponent } from './components/menu/menu-week/menu-week.component';
import { MenuDayComponent } from './components/menu/menu-day/menu-day.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu-day', component: MenuDayComponent },
  { path: 'menu-week', component: MenuWeekComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
