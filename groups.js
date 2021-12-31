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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
