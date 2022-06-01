import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import {ValidatorService} from 'angular-iban';
import { transferinfo } from '../models/transfermodel';
import { transactionService } from '../transactionservice.service';
import { updateTransfer } from '../store/actions/transaction.aciton';
import { Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: []
})
export class EditComponent{
  @Input() idno=0;
  details:any;
  public reactiveForm: FormGroup;
  public aname: FormControl;
  public aiban: FormControl;
  public adate: FormControl;
  public aamount: FormControl;
  public anote: FormControl;
  traninfo:transferinfo[]=[];
  value:boolean=false;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder,private store:Store) {
    this.aname=new FormControl('',[Validators.required]);
    this.aiban=new FormControl('',[Validators.required,ValidatorService.validateIban]);
    this.adate=new FormControl('',[Validators.required]);
    this.aamount=new FormControl('',[Validators.required,Validators.min(50),Validators.max(20000000)]);
    this.anote=new FormControl('',[Validators.required]);
    this.reactiveForm = new FormGroup({
      name:this.aname,
      iban:this.aiban,
      date:this.adate,
      amount:this.aamount,
      note:this.anote
    });
  }
  onSubmit()
  {
    this.saveDetails();
    this.store.dispatch(updateTransfer(this.details));
    this.newItemEvent.emit(this.value);
  }
  saveDetails()
  {
    if(!this.reactiveForm.valid)
    console.log("not valid")
    if(this.reactiveForm.valid)
    {
      this.details=this.getDetails();
      this.details.id=this.idno;
    }
  }
  getDetails ()
  {
    const formdetail=this.reactiveForm.getRawValue();
    return <transferinfo>{id:Math.floor(Math.random()*100000+1),accholder:formdetail.name,
    iban:formdetail.iban,
    date:formdetail.date,
    amount:formdetail.amount,
    note:formdetail.note
  };

}
}
