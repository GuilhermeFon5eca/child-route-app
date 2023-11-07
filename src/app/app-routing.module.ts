import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { USER_CHILD_ROUTES } from './user/user.routes';

const routes: Routes = [
  {path: 'user', component: UserComponent,children: USER_CHILD_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
