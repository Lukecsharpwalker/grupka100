import {CommonModule} from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { RoutingService } from '../routing.service';

@Component({
    selector: 'app-a',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './a.component.html'
})
export class AComponent{
    private subscriptions: Subscription = new Subscription();

    constructor(
        private activatedRoute: ActivatedRoute,
        private routingService: RoutingService

    ) {
      this.subscriptions.add(this.routingService.watchForParams(this.activatedRoute));

    }

    public ngOnInit() {
    }

    public ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
