import { BehaviorSubject } from 'rxjs';

export class CoreService {
  mobileScreenMaxWidth = 480;
  leftPanelDisplay: boolean;
  leftPanelDisplayChanged: BehaviorSubject<boolean>;

  constructor() {
    this.leftPanelDisplay = this.isMobileScreen() ? false : true;
    this.leftPanelDisplayChanged = new BehaviorSubject<boolean>(this.leftPanelDisplay);
  }

  private isMobileScreen() {
    return window.screen.width < this.mobileScreenMaxWidth;
  }

  toggleLeftPanel() {
    this.leftPanelDisplay = this.isMobileScreen() ? !this.leftPanelDisplay : true;
    this.leftPanelDisplayChanged.next(this.leftPanelDisplay);
  }
}
