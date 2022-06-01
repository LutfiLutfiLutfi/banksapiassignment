import { createAction, props } from '@ngrx/store';
import { transferinfo } from '../../models/transfermodel';

export const getTransfer = createAction('[Transfer] Get Transfer');
export const getTransferSuccess = createAction(
  '[Transfertion] Get Tranfertion success',
  (transfers: ReadonlyArray<transferinfo>) => ({ transfers })
);
export const addTransfer = createAction(
  '[transfer] Add transfer',
  (transfer: transferinfo) => ({ transfer })
);
export const addTransferSuccess = createAction(
  '[Transfer] Add Transfer success',
  (transfer: transferinfo) => ({ transfer })
);
export const deleteTransfer = createAction(
  '[Transfer] Delete Transfer',
  (transferId: number) => ({ transferId })
);

export const deleteTransferSuccess = createAction(
  '[Transfer] Delete Transfer success',
  (transferId: number) => ({ transferId })
);

export const updateTransfer = createAction(
  '[Transfer] Update Transfer',
  (transfer: transferinfo) => ({ transfer })
);

export const updateTransferSuccess = createAction(
  '[Movie] Update movie success',
  (transfer: transferinfo) => ({ transfer })
);