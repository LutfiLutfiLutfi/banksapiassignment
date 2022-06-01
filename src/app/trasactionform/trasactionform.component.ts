import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import {ValidatorService} from 'angular-iban';
import { transferinfo } from '../models/transfermodel';
import {  addTransfer } from '../store/actions/transaction.aciton';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-trasactionform',
  templateUrl: './trasactionform.component.html',
  styleUrls: []
})
export class TrasactionformComponent  {
  details:any;
  public reactiveForm: FormGroup;
  public aname: FormControl;
  public aiban: FormControl;
  public adate: FormControl;
  public aamount: FormControl;
  public anote: FormControl;
  traninfo:transferinfo[]=[];

  constructor(private fb: FormBuilder,private store: Store ) {
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
    console.log("submit function called!")
    this.saveDetails();
    this.reactiveForm.reset();
  }
  saveDetails()
  {
    if(!this.reactiveForm.valid)
    console.log("not valid")
    if(this.reactiveForm.valid)
    {
      this.details=this.getDetails();
      this.store.dispatch(addTransfer(this.details));
    }
  }
  getDetails ()
  {
    const formdetail=this.reactiveForm.getRawValue();
    return <transferinfo>{id:Math.floor(Math.random()*1000+1),accholder:formdetail.name,
    iban:formdetail.iban,
    date:formdetail.date,
    amount:formdetail.amount,
    note:formdetail.note
  };

}
}
