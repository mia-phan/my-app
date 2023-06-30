import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIllustrationComponent } from './project-illustration.component';

describe('ProjectIllustrationComponent', () => {
  let component: ProjectIllustrationComponent;
  let fixture: ComponentFixture<ProjectIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectIllustrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
