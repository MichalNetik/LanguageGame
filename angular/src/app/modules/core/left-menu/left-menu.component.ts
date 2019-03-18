import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  @Input() appName: string;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
  }

  onTabClick() {
    this.coreService.toggleLeftPanel();
  }

}
