import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: 'about', component: AboutComponent , pathMatch: 'full' },
  { path: 'services', component: ServicesComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**',redirectTo: 'HomeComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AfrosodAppRoutingModule { }
