import Book from "./book";

type BooksPagesInfo = { read: number; unread: number };

export default class BookShelf {
   constructor(private books: Book[]) {}

   toString(): string {
      return [
         `Gesamt Lesefortschritt: ${this.progress()}%`,
         `${this.label(this.startedBooks())} angefangen (${this.progress(
            this.startedBooks()
         )}%).`,
         `${this.label(this.unStartedBooks())} noch anzufangen`,
      ].join("\n");
   }

   private unStartedBooks(): Book[] {
      return this.books.filter((book: Book) => book.pageCurrent === 0);
   }

   private startedBooks(): Book[] {
      return this.books.filter((book: Book) => book.pageCurrent > 0);
   }

   private progress(books = this.books): number {
      const pagesInfo = BookShelf.booksPagesInfo(books);
      return Math.round(
         (100 * pagesInfo.read) / (pagesInfo.read + pagesInfo.unread)
      );
   }

   private label(books: Book[]) {
      return books.length === 1 ? "1 Buch" : `${books.length} Bücher`;
   }

   private static booksPagesInfo(books: Book[]): BooksPagesInfo {
      return books.reduce(
         (acc: BooksPagesInfo, book: Book) => {
            acc.read += book.pageCurrent;
            acc.unread += book.unreadPages();
            return acc;
         },
         { read: 0, unread: 0 }
      );
   }
}
