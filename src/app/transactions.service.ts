import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { transferinfo } from './models/transfermodel';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService implements InMemoryDbService {

  createDb() {
    let transfers:transferinfo[]=[
    {id:1,accholder: "uhjnk", iban: "AD1400080001001234567890", date: new Date(), amount: 500, note: "zoom" },
    {id:2,accholder:"jack",iban:"AL35202111090000000001234567",date:new Date(),amount:2799.45,note:"transaction2"},
    {id:3,accholder:"lutfi",iban:"AD1400080001001234567890",date:new Date(),amount:29,note:"why"},
    {id:4,accholder:"alice",iban:"BY86AKBB10100000002966000000",date:new Date(),amount:99.45,note:"send me a message eve"},
    {id:5,accholder:"malery",iban:"BA393385804800211234",date:new Date(),amount:9.45,note:"i will intercept"},]
    return {transfers};
  } 
      
}

