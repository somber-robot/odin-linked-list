import { LinkedList } from "./linked-list.js";

describe("linked list tests", () => {
  const list = new LinkedList();

  // list: null

  test("append an item to the list", () => {
    list.append(5);
    expect(list.toString()).toBe("( 5 ) -> null");
  });

  // list: 5

  test("prepend an item to the list", () => {
    list.prepend(2);
    expect(list.toString()).toBe("( 2 ) -> ( 5 ) -> null");
  });

  // list: 2, 5

  test("get list size", () => {
    expect(list.size()).toBe(2);
    expect(new LinkedList().size()).toBe(0);
  });

  test("get node value at index", () => {
    expect(list.at(1)).toBe(5);
    expect(new LinkedList().at(0)).toBeUndefined();
  });

  test("pop item from list", () => {
    expect(list.pop()).toBe(2);
    expect(list.head().value).toBe(5);
  });

  // list: 5

  test("check for item in list", () => {
    list.append(4);
    expect(list.contains(4)).toBe(true);
  });

  // list: 5, 4

  test("find item in list", () => {
    list.prepend(7);
    expect(list.findIndex(9)).toBe(-1);
    expect(list.findIndex(4)).toBe(2);
  });

  // list: 7, 5, 4

  test("insert item into list", () => {
    list.insertAt(1, 1, 2, 3);
    expect(list.toString()).toBe(
      "( 7 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 5 ) -> ( 4 ) -> null",
    );
    list.insertAt(5, 8);
    expect(list.toString()).toBe(
      "( 7 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 5 ) -> ( 8 ) -> ( 4 ) -> null",
    );
  });

  // list: 7, 1, 2, 3, 5, 8, 4

  test("remove item from list", () => {
    list.removeAt(2);
    expect(list.toString()).toBe(
      "( 7 ) -> ( 1 ) -> ( 3 ) -> ( 5 ) -> ( 8 ) -> ( 4 ) -> null",
    );
  });

  // list: 7, 1, 3, 5, 8, 4
});
