import { Component, OnInit } from '@angular/core';
import { PlansService } from './../../services/plans.service';

import { Plan } from './../../models/plan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  public plans: Plan[];

  constructor(private _planService: PlansService) { }

  ngOnInit() {
    this.getPlans();
  }

  public getPlans() {
    this._planService
      .getAllPlans()
      .subscribe(
        data => this.plans = data,
        error => console.log('Can not load')
      )
  }

}
