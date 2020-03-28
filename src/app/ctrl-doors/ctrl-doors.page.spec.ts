import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CtrlDoorsPage } from './ctrl-doors.page';

describe('CtrlDoorsPage', () => {
  let component: CtrlDoorsPage;
  let fixture: ComponentFixture<CtrlDoorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrlDoorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CtrlDoorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
