import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PlansComponent } from './components/plans/plans.component';
import { FinanceComponent } from './components/finance/finance.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'finance', component: FinanceComponent },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

