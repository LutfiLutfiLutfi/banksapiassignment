import { HttpClient, HttpErrorResponse ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { transferinfo } from './models/transfermodel';
import { catchError, map } from 'rxjs/operators';
import { getTransfer, addTransfer } from './store/actions/transaction.aciton';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root',
})
export class transactionService {
  private url = 'http://localhost:8080/api/transfers/';
  constructor(public http: HttpClient) {}
  gettransaction(): Observable<transferinfo[]> {
    return this.http.get<transferinfo[]>(this.url).pipe(
        catchError(this.handleError) 
        );
  }
  gettransactionid(id:number):Observable<transferinfo> 
  {
    const durl = `${this.url}${id}`;
    console.log(durl);
    return this.http.get<transferinfo>(durl).pipe(
        catchError(this.handleError) 
        );
  }
  addtransaction(transfer:transferinfo): Observable<transferinfo> {
 
    return this.http.post<transferinfo>(this.url, transfer).pipe(
        catchError(this.handleError)
    );
  }
  deletetransaction(transactionid: number ): Observable<any> {
    const durl = `${this.url}${transactionid}`;
    return this.http.delete<transferinfo>(durl).pipe(
      catchError(this.handleError)
    );
  }
   updatetransaction(transfer:transferinfo): Observable<transferinfo> {
     const durl = `${this.url}${transfer.id}`;
    return this.http.put<transferinfo>(durl, transfer).pipe(
      catchError(this.handleError)
    );
  }
   private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
}