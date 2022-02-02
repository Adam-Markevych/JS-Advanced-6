import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserListComponent } from './works/user-list/user-list.component';
import { TaskListComponent } from './works/task-list/task-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'works', component: WorksComponent, children:[
    { path: 'cenzor', component: CenzorComponent },
    { path: 'userlist', component: UserListComponent },
    { path: 'tasklist', component: TaskListComponent },
    //{ path: '', pathMatch: 'full', redirectTo: 'cenzor' }
  ]},
];
// { path: 'admin', component: AdminComponent, children: [
//   { path: 'category', component: AdminCategoryComponent },
//   { path: 'product', component: AdminProductComponent },
//   { path: 'discount', component: AdminDiscountComponent },
//   { path: 'news', component: AdminNewsComponent },
//   { path: 'order', component: AdminOrderComponent },
//   { path: '', pathMatch: 'full', redirectTo: 'category' }
// ] },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// { path: 'admin', component: AdminComponent, children: [
//   { path: 'category', component: AdminCategoryComponent },
//   { path: 'product', component: AdminProductComponent },
//   { path: 'discount', component: AdminDiscountComponent },
//   { path: 'news', component: AdminNewsComponent },
//   { path: 'order', component: AdminOrderComponent },
//   { path: '', pathMatch: 'full', redirectTo: 'category' }
// ] },