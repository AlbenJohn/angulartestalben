import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateempComponent } from './updateemp.component';

const routes: Routes = [{ path: '', component: UpdateempComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateempRoutingModule { }
