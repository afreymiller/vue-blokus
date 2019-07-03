class Set {

  constructor() {
    this.set = [];
  }

  isEmpty () {
    return this.set.length == 0;
  }

  contains(x) {
    return this.set.indexOf(x) >= 0;
  }

  insert (item) {
    if (this.set.filter(x => x === item).length === 0) {
      this.set.push(item);
    }
  }

  intersect (s1) {
    return this.set.filter(x => s1.contains(x));
  }

  get size() {
    return this.set.length;
  }
}

module.exports = Set;