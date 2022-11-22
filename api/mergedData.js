// for merged promises
import { getAuthorBooks, getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObject) => {
    getSingleAuthor(bookObject.author_id).then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authorObject) => {
    getAuthorBooks(authorObject.firebaseKey).then((bookObject) => resolve({ ...authorObject, bookObject }));
  }).catch(reject);
});

export { getBookDetails, getAuthorDetails };
