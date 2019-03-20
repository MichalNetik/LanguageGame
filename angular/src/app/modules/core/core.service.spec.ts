import { CoreService } from './core.service';


describe('CoreService', () => {
  let service: CoreService;
  beforeEach(() => {
  })

  it('should properly create the service for a mobile screen', () => {
    (window as any)['screen'] = { width: 320 };
    service = new CoreService();

    expect(service.leftPanelDisplay).toBeFalsy();

  })

  it('should properly create the service for a laptop screen', () => {
    (window as any)['screen'] = { width: 640 };
    service = new CoreService();

    expect(service.leftPanelDisplay).toBeTruthy();
  })

  it('should toggleLeftPanel twice for mobile screen', () => {
    (window as any)['screen'] = { width: 320 };
    service = new CoreService();
    let counter = 0;
    const expectedResults: boolean[] = [false, true, false];

    service.leftPanelDisplayChanged.subscribe(
      (value: boolean) => {
        expect(value).toBe(expectedResults[counter]);
        counter++;
      }
    );

    service.toggleLeftPanel();
    service.toggleLeftPanel();
  })
});
