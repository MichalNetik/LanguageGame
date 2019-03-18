import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoreService } from './modules/core/core.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  appName = 'Lang Game';

  leftPanelDisplayedSub: Subscription;
  leftPanelDisplayed: boolean;

  constructor(
    private coreService: CoreService
  ) {}

  ngOnInit() {
    this.leftPanelDisplayedSub = this.coreService.leftPanelDisplayChanged.subscribe(
      (value: boolean) => {
        this.leftPanelDisplayed = value;
      }
    )
  }

  ngOnDestroy() {
    this.leftPanelDisplayedSub.unsubscribe();
  }

  onDisabledBackgroundClick() {
    this.coreService.toggleLeftPanel();
  }
}
