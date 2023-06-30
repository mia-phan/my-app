import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAppComponent } from './project-app.component';

describe('ProjectAppComponent', () => {
  let component: ProjectAppComponent;
  let fixture: ComponentFixture<ProjectAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
