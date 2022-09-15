import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selelctCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selelctCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
