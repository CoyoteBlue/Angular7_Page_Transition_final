import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'app-main', pathMatch: 'full', data: {title: false, depth: 1}},
  { path: 'app-main', component: MainComponent, data: {title: false, depth: 1} },
  { path: 'app-about', component: AboutComponent, data: {title: false, depth: 2}  },
  { path: 'app-services', component: ServicesComponent, data: {title: false, depth: 3}  },
  { path: 'app-contact', component: ContactComponent, data: {title: false, depth: 4}  },
  ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES), CommonModule],
  exports: [RouterModule]
/*  import { AppComponent } from './app.component';*/
})
export class AppRoutingModule {}
/*export const routingComponents = { MainComponent }*/
