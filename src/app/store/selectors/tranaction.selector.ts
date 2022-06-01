import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transferinfo } from 'src/app/models/transfermodel';
import { TransferState } from '../reducers/transaction.reducer';

export const TransferSelector = createSelector(
  (state: TransferState) => {console.log("fe",state.transfers,"mo") ;return state.transfers},
  (transfers: ReadonlyArray<transferinfo>) => transfers
);

// export const movieUserSelector = createSelector(
//   (state: MovieState) => state.movies,
//   (state: MovieState) => state.user,
//   (movies: ReadonlyArray<Movie>, user: Readonly<string>) => {
//     return movies.filter((movie: Movie) => movie.userName === user);
//   }
// );
// export const movie = createSelector(
//   TransferSelector,
//   // selectRouteParams,
//   (movies: ReadonlyArray<Movie>, { id }) => {
//     return movies.filter((m) => m.id === Number(id))[0];
//   }
// );