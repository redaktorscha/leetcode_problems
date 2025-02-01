const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

let copy = {
  val: null,
  next: null,
};
let current = copy;

let reversed = null;

let node = list;

while (node) {
  current.next = {
    val: node.val,
    next: null,
  };
  current = current.next;
  const newNode = {
    val: node.val,
    next: reversed,
  };
  reversed = newNode;
  node = node.next;
}
console.log(JSON.stringify(copy.next));
console.log(JSON.stringify(reversed));
