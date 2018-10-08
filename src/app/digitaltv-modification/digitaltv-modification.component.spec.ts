import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDigitaltvModificationComponent } from './digitaltv-modification.component';

describe('ToolDigitaltvModificationComponent', () => {
  let component: ToolDigitaltvModificationComponent;
  let fixture: ComponentFixture<ToolDigitaltvModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolDigitaltvModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDigitaltvModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
