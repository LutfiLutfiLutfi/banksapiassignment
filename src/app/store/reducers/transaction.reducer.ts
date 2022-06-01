import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { transferinfo } from 'src/app/models/transfermodel';
import {
  addTransferSuccess,
  deleteTransferSuccess,
  getTransferSuccess,
  updateTransferSuccess,
} from '../actions/transaction.aciton';

export interface TransferState {
  transfers: ReadonlyArray<transferinfo>;
}

const initialState: ReadonlyArray<transferinfo> = [];

export const transferReducer = createReducer(
  initialState,
  on(getTransferSuccess, (state, { transfers }) =>{console.log("zo",...transfers,"te");return [...transfers]}),
  on(addTransferSuccess, (state, { transfer }) => {console.log("mo",state,"hunda",transfer,"ke");return [...state, transfer]}),
  on(deleteTransferSuccess, (state, { transferId }) =>
    state.filter((transfer) => transfer.id !== transferId)
  ),
  on(updateTransferSuccess, (state, { transfer }) => {
    const transfers = state.map((t) => {
      if (t.id === transfer.id) {
        return transfer;
      } 
      return t;
    });
    return transfers;
  })
);