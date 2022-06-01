import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ImportState } from '@ngrx/store-devtools/src/actions';
import { provideMockStore } from '@ngrx/store/testing';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[provideMockStore()],
      declarations: [ EditComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
