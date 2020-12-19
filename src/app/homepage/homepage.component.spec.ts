import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(`should have a title 'homepage'`, async(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('homepage');
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
