// Define Enums
var BookGenre;
(function (BookGenre) {
    BookGenre["FICTION"] = "FICTION";
    BookGenre["NON_FICTION"] = "NON_FICTION";
    BookGenre["MYSTERY"] = "MYSTERY";
    BookGenre["SCIENCE_FICTION"] = "SCIENCE_FICTION";
    BookGenre["BIOGRAPHY"] = "BIOGRAPHY";
    BookGenre["FANTASY"] = "FANTASY";
})(BookGenre || (BookGenre = {}));
var MemberRole;
(function (MemberRole) {
    MemberRole["ORGANIZER"] = "ORGANIZER";
    MemberRole["MODERATOR"] = "MODERATOR";
    MemberRole["MEMBER"] = "MEMBER";
    MemberRole["GUEST"] = "GUEST";
})(MemberRole || (MemberRole = {}));
function getBooksByGenre(books, genre) {
    return books.filter(function (book) { return book.genre === genre; });
}
function getMembersByRole(members, role) {
    return members.filter(function (member) { return member.role === role; });
}
function countBooksByGenre(books) {
    var _a;
    return books.reduce(function (acc, book) {
        acc[book.genre] = (acc[book.genre] || 0) + 1;
        return acc;
    }, (_a = {},
        _a[BookGenre.FICTION] = 0,
        _a[BookGenre.NON_FICTION] = 0,
        _a[BookGenre.MYSTERY] = 0,
        _a[BookGenre.SCIENCE_FICTION] = 0,
        _a[BookGenre.BIOGRAPHY] = 0,
        _a[BookGenre.FANTASY] = 0,
        _a));
}
var books = [
    { title: '1984', author: 'George Orwell', genre: BookGenre.FICTION },
    { title: 'Sapiens', author: 'Yuval Noah Harari', genre: BookGenre.NON_FICTION },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: BookGenre.FANTASY },
    { title: 'The Da Vinci Code', author: 'Dan Brown', genre: BookGenre.MYSTERY }
];
var members = [
    { name: 'Alice', role: MemberRole.MEMBER },
    { name: 'Bob', role: MemberRole.ORGANIZER },
    { name: 'Charlie', role: MemberRole.MODERATOR },
    { name: 'Dave', role: MemberRole.GUEST }
];
console.log(getBooksByGenre(books, BookGenre.FICTION));
console.log(getMembersByRole(members, MemberRole.MEMBER));
console.log(countBooksByGenre(books));
