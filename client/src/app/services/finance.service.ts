import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

//model
import { Finance } from './../models/finance';

const FINANCE_URL = '/api/v1/finance';

@Injectable()
export class FinanceService {

  constructor(private _http: HttpClient) { }

  public getAllFinance(): Observable<Finance[]> {
    return new Observable((observer: Observer<Finance[]>) => {
      this._http
        .get<Finance[]>(FINANCE_URL)
        .subscribe(
          (response: any[]) => {
            observer.next(response);
            observer.complete();
          },
          errors => observer.error(errors)
        );
    });
  }

}
