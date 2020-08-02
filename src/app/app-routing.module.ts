import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WpComponent } from "../app/wp/wp.component";


const routes: Routes = [{ path: 'welcome', component: WpComponent },
{ path: '',   redirectTo: '/welcome', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
