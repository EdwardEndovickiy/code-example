import { Component, OnInit } from '@angular/core';
import { FinanceService } from './../../services/finance.service';

import { Finance } from './../../models/finance';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  public finance: Finance[];

  constructor(private _financeService: FinanceService) { }

  ngOnInit() {
    this.getFinance();
  }

  public getFinance() {
    this._financeService
      .getAllFinance()
      .subscribe(
        data => this.finance = data,
        error => console.log('Can not load')
      )
  }

}
