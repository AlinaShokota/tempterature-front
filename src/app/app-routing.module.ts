import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LivingRoomComponent } from './components/living-room/living-room.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { BedroomComponent } from './components/bedroom/bedroom.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'living-room', component: LivingRoomComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'bedroom', component: BedroomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
