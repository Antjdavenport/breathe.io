export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action, an object with a type property.
  // must have a type, and a payload. Payload is a peice of data that describes the action undertaken
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
