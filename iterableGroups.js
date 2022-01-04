class Group {
  constructor() {
    this.group = [];
  }

  add(num) {
    if (!this.group.includes(num)) {
      this.group.push(num);
    }
  }

  delete(num) {
    this.group = this.group.filter((element) => element !== num);
  }

  has(num) {
    if (this.group.includes(num)) {
      return true;
    }
    return false;
  }

  static from(array) {
    let result = new Group();
    array.forEach((element) => result.add(element));
    return result;
  }
}

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group;
  }

  next() {
    if (this.i == this.group.length) return { done: true };
    let value = this.group[this.i];
    this.i++;
    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this.group);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
