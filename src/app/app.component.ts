import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingService } from './routing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  protected obs$!: Observable<boolean>;

  constructor(private routingService: RoutingService) {}

  public ngOnInit() {
    this.obs$ = this.routingService.obs$;
  }
}
