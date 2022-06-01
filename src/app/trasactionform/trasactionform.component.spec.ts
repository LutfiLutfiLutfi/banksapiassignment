import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasactionformComponent } from './trasactionform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('TrasactionformComponent', () => {
  let component: TrasactionformComponent;
  let fixture: ComponentFixture<TrasactionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[provideMockStore()],
      declarations: [ TrasactionformComponent ,
      ],
      imports:[ReactiveFormsModule,
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasactionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
