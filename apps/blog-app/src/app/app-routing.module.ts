import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [

  { path: '', component:  MainComponent},
  { path: 'main', component:  MainComponent},
  { path: 'profile', component:  ProfileComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
