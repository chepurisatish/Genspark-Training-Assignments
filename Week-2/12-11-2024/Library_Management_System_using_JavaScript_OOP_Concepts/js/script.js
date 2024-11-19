const Library = {
  books: [],
  users: [],

  addBook(title, author) {
    this.books.push({ title, author, isBorrowed: false });
    updateAvailableBooks();
  },

  listAvailableBooks() {
    return this.books.filter((book) => !book.isBorrowed);
  },

  getBorrowedBooks() {
    return this.books.filter((book) => book.isBorrowed);
  },
};

// custom popup
function showPopup(message) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.textContent = message;

  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 2000);
}

// Update available books
function updateAvailableBooks() {
  const availableBooksList = document.getElementById("available-books-list");
  const bookSelect = document.getElementById("borrowed-book-select");

  availableBooksList.innerHTML = "";
  bookSelect.innerHTML = '<option value="">Select a book</option>';

  Library.listAvailableBooks().forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}`;
    availableBooksList.appendChild(li);

    const option = document.createElement("option");
    option.value = book.title;
    option.textContent = book.title;
    bookSelect.appendChild(option);
  });
}
function toggleAddBookForm() {
  const modal = document.getElementById("add-book-modal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function addBook() {
  let title = document.getElementById("book-title").value;
  let author = document.getElementById("book-author").value;

  title = title.charAt(0).toUpperCase() + title.slice(1);
  author = author.charAt(0).toUpperCase() + author.slice(1);

  if (title && author) {
    Library.addBook(title, author);
    showPopup(`Book "${title}" added to the library!`);
    toggleAddBookForm();
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
  } else {
    showPopup("Please enter both title and author.");
  }
}

// Create a new user
function createUser() {
  const name = document.getElementById("user-name").value;
  const membershipId = document.getElementById("membership-id").value || "N/A";

  if (!name) {
    showPopup("Please enter a name.");
    return;
  }

  const userExists = Library.users.some(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  if (userExists) {
    showPopup("This username is already taken. Please choose another name.");
    return;
  }

  // Add the new user
  Library.users.push({ name, membershipId, borrowedBooks: [] });
  document.getElementById("user-name").value = "";
  document.getElementById("membership-id").value = "";

  updateUsersDropdown();
  showPopup(`User "${name}" created successfully!`);
}

function updateUsersDropdown() {
  const userSelectBorrow = document.getElementById("user-select-borrow");
  const userSelectReturn = document.getElementById("user-select-return");

  userSelectBorrow.innerHTML = '<option value="">Select a user</option>';
  userSelectReturn.innerHTML = '<option value="">Select a user</option>';

  Library.users.forEach((user) => {
    const optionBorrow = document.createElement("option");
    optionBorrow.value = user.name;
    optionBorrow.textContent = user.name;
    userSelectBorrow.appendChild(optionBorrow);

    const optionReturn = document.createElement("option");
    optionReturn.value = user.name;
    optionReturn.textContent = user.name;
    userSelectReturn.appendChild(optionReturn);
  });

  userSelectReturn.addEventListener("change", updateBorrowedBooksDropdown);
}

// Borrow a book
function borrowBook() {
  const userName = document.getElementById("user-select-borrow").value;
  const bookTitle = document.getElementById("borrowed-book-select").value;

  if (!userName || !bookTitle) {
    showPopup("Please select a user and a book to borrow.");
    return;
  }

  const user = Library.users.find((u) => u.name === userName);
  const book = Library.books.find((b) => b.title === bookTitle);

  if (!user || !book || book.isBorrowed) {
    showPopup("User not found or book is already borrowed.");
    return;
  }

  book.isBorrowed = true;
  user.borrowedBooks.push(book);
  showPopup(`${userName} borrowed "${bookTitle}".`);

  updateAvailableBooks();
  updateBorrowedBooks();
}

// Return a book
function returnBook() {
  const userName = document.getElementById("user-select-return").value;
  const bookTitle = document.getElementById("return-book-title").value;

  if (!userName || !bookTitle) {
    showPopup("Please select a user and book to return.");
    return;
  }

  const user = Library.users.find((u) => u.name === userName);
  const book = user
    ? user.borrowedBooks.find((b) => b.title === bookTitle)
    : null;

  if (!user || !book) {
    showPopup("User or borrowed book not found.");
    return;
  }

  book.isBorrowed = false;
  user.borrowedBooks = user.borrowedBooks.filter((b) => b.title !== bookTitle);
  showPopup(`${userName} returned "${bookTitle}".`);

  updateAvailableBooks();
  updateBorrowedBooks();
}

// Update borrowed books in user cards
function updateBorrowedBooks() {
  const borrowedBooksSection = document.getElementById(
    "borrowed-books-section"
  );
  borrowedBooksSection.innerHTML = "";

  Library.users.forEach((user) => {
    if (user.borrowedBooks.length > 0) {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");

      const userName = document.createElement("h3");
      const membershipId = user.membershipId || "N/A";
      userName.textContent = `${user.name} (ID: ${membershipId})`;
      userCard.appendChild(userName);

      const bookList = document.createElement("ul");
      user.borrowedBooks.forEach((book) => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
      });
      userCard.appendChild(bookList);

      borrowedBooksSection.appendChild(userCard);
    }
  });
}

// Update borrowed books dropdown for returning books
function updateBorrowedBooksDropdown() {
  const userName = document.getElementById("user-select-return").value;
  const returnBookSelect = document.getElementById("return-book-title");

  returnBookSelect.innerHTML = '<option value="">Select a book</option>';

  const user = Library.users.find((u) => u.name === userName);
  if (user && user.borrowedBooks.length > 0) {
    user.borrowedBooks.forEach((book) => {
      const option = document.createElement("option");
      option.value = book.title;
      option.textContent = book.title;
      returnBookSelect.appendChild(option);
    });
  }
}

// Initial setup
updateAvailableBooks();
updateUsersDropdown();
