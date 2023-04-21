import create from "zustand";
import {
  devtools,
  // persist
} from "zustand/middleware";

interface IBook {
  id: number;
  name: string;
  author: string;
  editorial: string;
  year: number;
}

interface IBooksStore {
  totalBooks: number;
  addBook: (addNumber: number) => void;
  books: IBook[];
}

export const useBookStore = create<IBooksStore>()(
  devtools(
    // persist(    /// mantiene el state, aunque se haga refresh
    (set) => ({
      totalBooks: 3,
      addBook: (addNumber) =>
        set((state) => ({
          totalBooks: state.totalBooks + addNumber,
        })),
      books: [
        {
          id: 1,
          name: "Lord of the rings",
          author: "J.R.R. Tolkien",
          editorial: "Editorial",
          year: 2000,
        },
        {
          id: 2,
          name: "Harry Potter and the Sorcerer's Stone",
          author: "J.K. Rowling",
          editorial: "Editorial 2",
          year: 2000,
        },
        {
          id: 3,
          name: "The Hobbit",
          author: "J.R.R. Tolkien",
          editorial: "Editorial",
          year: 2000,
        },
      ],
    }),
    {
      name: "book-storage",
    }
    // )
  )
);
