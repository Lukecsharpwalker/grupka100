import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  tap,
  asyncScheduler,
  withLatestFrom,
  skip,
  debounceTime,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  public obs$!: Observable<boolean>;
  private _obs$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.obs$ = this._obs$.asObservable();
  }

  private setObs(value?: boolean) {
    this._obs$.next(Boolean(value));
  }

  public watchForParams(activatedRoute: ActivatedRoute) {
    return activatedRoute.params
      .pipe(
        // debounceTime(0),
        withLatestFrom(activatedRoute.url, activatedRoute.data),
        tap(([params, url, data]) => {
          console.log('params' ,params);
          this.setObs(true);
        })
      )
      .subscribe();
  }
}
