var Store = /** @class */ (function () {
    function Store() {
        this.items = [];
    }
    Store.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Store.prototype.removeItem = function (id) {
        var item = this.findItem(id);
        if (item) {
            var index = this.items.indexOf(item);
            this.items.splice(index, 1);
        }
        return item;
    };
    Store.prototype.findItem = function (id) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                return item;
            }
        }
        return undefined;
    };
    Store.prototype.getItems = function () {
        return this.items;
    };
    return Store;
}());
var bookStore = new Store();
var deviceStore = new Store();
var clothesStore = new Store();
// Add books to the store
bookStore.addItem({
    id: "b1",
    name: "Harry Potter",
    author: "J.K. Rowling",
    pages: 500,
});
bookStore.addItem({
    id: "b2",
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
});
bookStore.addItem({
    id: "b3",
    name: "Percy Jackson",
    author: "Rick Riordan",
    pages: 350,
});
// Add devices to the store
deviceStore.addItem({
    id: "d1",
    name: "Phone",
    brand: "Samsung",
    hasWarranty: true,
});
deviceStore.addItem({
    id: "d2",
    name: "Laptop",
    brand: "HP",
    hasWarranty: true,
});
deviceStore.addItem({
    id: "d3",
    name: "Earbuds",
    brand: "Boat",
    hasWarranty: false,
});
// Add clothes to the store
clothesStore.addItem({
    id: "c1",
    name: "Shirt",
    size: "M",
    material: "Cotton",
});
clothesStore.addItem({ id: "c2", name: "Pants", size: "L", material: "Denim" });
clothesStore.addItem({
    id: "c3",
    name: "Jacket",
    size: "S",
    material: "Leather",
});
// 1. Get all items in each store
console.log("Books in Store:", bookStore.getItems());
console.log("Devices in Store:", deviceStore.getItems());
console.log("Clothes in Store:", clothesStore.getItems());
// 2. Find an item by ID
var foundBook = bookStore.findItem("b2");
console.log("Found Book:", foundBook);
var foundDevice = deviceStore.findItem("d1");
console.log("Found Device:", foundDevice);
var foundClothes = clothesStore.findItem("c3");
console.log("Found Clothes:", foundClothes);
// 3. Remove an item by ID
var removedBook = bookStore.removeItem("b1");
console.log("Removed Book:", removedBook);
var removedDevice = deviceStore.removeItem("d2");
console.log("Removed Device:", removedDevice);
var removedClothes = clothesStore.removeItem("c1");
console.log("Removed Clothes:", removedClothes);
// 4. Get the updated list of items after removal
console.log("Updated Books in Store:", bookStore.getItems());
console.log("Updated Devices in Store:", deviceStore.getItems());
console.log("Updated Clothes in Store:", clothesStore.getItems());
