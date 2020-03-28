import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CtrlLightPage } from './ctrl-light.page';

describe('CtrlLightPage', () => {
  let component: CtrlLightPage;
  let fixture: ComponentFixture<CtrlLightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrlLightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CtrlLightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
