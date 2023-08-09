import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationDialogComponent } from './illustration-dialog.component';

describe('IllustrationDialogComponent', () => {
  let component: IllustrationDialogComponent;
  let fixture: ComponentFixture<IllustrationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IllustrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
