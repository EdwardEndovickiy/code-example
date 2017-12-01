import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Plan } from './../models/plan';

const PLANS_URL = '/api/v1/plans';

@Injectable()
export class PlansService {

  constructor(private _http: HttpClient) { }

  public getAllPlans(): Observable<Plan[]> {
    return new Observable((observer: Observer<Plan[]>) => {
      this._http
        .get<Plan[]>(PLANS_URL)
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
