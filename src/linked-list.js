import { rules } from "eslint-plugin-jest";

export class LinkedList {
  #head = null;
  #tail = null;

  append(value) {
    newNode = new Node(value);
    if (this.#tail) {
      this.#tail.next = newNode;
      this.#tail = newNode;
    } else {
      this.#head = newNode;
      this.#tail = newNode;
    }
  }

  prepend(value) {
    newNode = new Node(value);
    if (this.#head) {
      newNode.next = this.#head;
      this.#head = newNode;
    } else {
      this.#head = newNode;
      this.#tail = newNode;
    }
  }

  size() {
    let count = 0,
      current = this.#head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  head() {
    return this.#head || undefined;
  }

  tail() {
    return this.#tail || undefined;
  }

  at(index) {
    let count = 0,
      current = this.#head;
    while (current) {
      if (count === index) return current.value;
      count++;
      current = current.next;
    }
    return undefined;
  }

  pop() {
    if (!this.#head) return undefined;
    const value = this.#head.value;
    this.#head = this.#head.next;
    return value;
  }

  contains(value) {
    let current = this.#head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  findIndex(value) {
    let index = 0,
      current = this.#head;
    while (current) {
      if (current.value === value) return index;
      index++;
      current = current.next;
    }
    return -1;
  }

  insertAt(index, ...values) {
    if (index < 0) throw RangeError("index out of bounds");
    if (!this.#head) {
      values.forEach((value) => {
        this.append(value);
      });
      return;
    }
    // with non-empty list, go to index whilst tracking previous and turn current to a tail, set previous's next as insertions, and append the tail to the last one
    let count = 0,
      current = this.#head,
      previous;
    while (current) {
      if (count !== index) {
        count++;
        previous = current;
        current = current.next;
        continue;
      }

      let point = previous || this.#head;
      values.forEach((value) => {
        const newNode = new Node(value);
        point.next = newNode;
        point = newNode;
      });
      point.next = current;
      return;
    }
    throw RangeError("index out of bounds");
  }

  removeAt(index) {
    if (index < 0) throw RangeError("index out of bounds");
    let count = 0,
      current = this.#head,
      previous;
    while (current) {
      if (count !== index) {
        count++;
        previous = current;
        current = current.next;
        continue;
      }

      previous.next = current.next;
      return;
    }
    throw RangeError("index out of bounds");
  }

  toString() {
    if (!this.#head) return "";
    let current = this.#head;
    let result = "";
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.next;
    }
    result += "null";
    return result;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
