import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TransactiontableComponent } from './transactiontable.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
describe('TransactiontableComponent', () => {
  let component: TransactiontableComponent;
  let fixture: ComponentFixture<TransactiontableComponent>;
  let debugElement:DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[provideMockStore()],
      declarations: [ TransactiontableComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactiontableComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should show table component when not in edit',()=>{
  //   expect(debugElement.query(By.css('.ball')).nativeElement).toBeTruthy();
  // })
});
