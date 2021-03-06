import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { GameComponent } from './game/game.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path:'', redirectTo:'signUp',pathMatch:'full'
},{
  path:'signIn',component:SignInComponent
},{
  path:'signUp',component:SignUpComponent
},{
  path:'profile',component:ProfileComponent
},{
  path:'game',component:GameComponent,canActivate:  [AuthGuard]
},{
  path:'**', redirectTo:'signUp'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
