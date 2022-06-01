import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { transactionService } from 'src/app/transactionservice.service';

import {
  getTransfer,
  getTransferSuccess,
  addTransfer,
  addTransferSuccess,
  deleteTransfer,
  deleteTransferSuccess,
  updateTransfer,
  updateTransferSuccess,
} from '../actions/transaction.aciton';

@Injectable()
export class transferEffects {
  loadTransfer$ = createEffect(() =>
    this.action$.pipe(
      ofType(getTransfer),
      exhaustMap(() =>
        this.transactionService.gettransaction().pipe(
          map((transfer) => getTransferSuccess(transfer)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addTransfer$ = createEffect(() =>
    this.action$.pipe(
      ofType(addTransfer),
      concatMap(({ transfer }) =>
        this.transactionService.addtransaction(transfer).pipe(
          map((newTransfer) => addTransferSuccess(newTransfer)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deletetransfer$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteTransfer),
      mergeMap(({ transferId }) =>
        this.transactionService.deletetransaction(transferId).pipe(
          map(() => deleteTransferSuccess(transferId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateTransfer$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateTransfer),
      concatMap(({ transfer }) =>
        this.transactionService.updatetransaction(transfer).pipe(
          map(() => updateTransferSuccess(transfer)),
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(private action$: Actions, private transactionService: transactionService) {}
}


