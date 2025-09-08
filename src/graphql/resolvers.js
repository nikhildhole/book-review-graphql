const booksData = [
  { id: '1', title: '1984', author: 'George Orwell', publisherId: '1' },
  { id: '2', title: 'The Hobbit', author: 'J.R.R. Tolkien', publisherId: '2' },
];

const publishersData = [
  { id: '1', name: 'Penguin Random House', country: 'USA' },
  { id: '2', name: 'HarperCollins', country: 'UK' },
];

module.exports = {
  Query: {
    books: (_, args) => {
      return booksData.filter((book) => {
        const publisher = publishersData.find(
          (pub) => pub.id === book.publisherId
        );

        // filter by title
        if (
          args.title &&
          !book.title.toLowerCase().includes(args.title.toLowerCase())
        ) {
          return false;
        }

        // filter by author
        if (
          args.author &&
          !book.author.toLowerCase().includes(args.author.toLowerCase())
        ) {
          return false;
        }

        // filter by publisher name
        if (
          args.publisherName &&
          !publisher.name
            .toLowerCase()
            .includes(args.publisherName.toLowerCase())
        ) {
          return false;
        }

        return true;
      });
    },
    publishers: () => publishersData,
  },
  Book: {
    publisher: (parent) =>
      publishersData.find((pub) => pub.id === parent.publisherId),
  },
};
