import { Component, OnInit } from '@angular/core';
import { transferinfo } from '../models/transfermodel';
import { select, Store } from '@ngrx/store';
import { getTransfer, addTransfer, updateTransfer, deleteTransfer, deleteTransferSuccess } from '../store/actions/transaction.aciton';
import { TransferSelector } from '../store/selectors/tranaction.selector';
import { TransferState } from '../store/reducers/transaction.reducer';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-transactiontable',
  templateUrl: './transactiontable.component.html',
  styleUrls: []
})
export class TransactiontableComponent implements OnInit{
  Last:number=50;
  editid:number=0;
  x=new Date();
  edito:boolean=false;
  traninfo1:transferinfo[]=[];
  traninfo$:Observable<ReadonlyArray<transferinfo>>=this.store.pipe(select(TransferSelector));
  //t:transferinfo=new transferinfo();
  constructor(private store: Store<TransferState>,private store1:Store){
    this.store1.dispatch(getTransfer());
  }
  ngOnInit():void{
    this.traninfo$.subscribe();
  }
  edit(x:transferinfo)
  {
    this.editid=x.id
    this.edito=true;
    console.log("edit button pressed");
  }
  cardchange(value:boolean)
  {
    this.edito=value;
  }
  redelete(x:transferinfo)
  {  
    this.store1.dispatch(deleteTransfer(x.id));
    console.log("delete button pressed");
  }

}
