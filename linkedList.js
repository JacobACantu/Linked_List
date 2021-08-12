//pseudo
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null) {
      list.tail = list.head = Node(value);
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    if (this.length === 0) {
      return undefined;
    }

    let value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  };  

  list.contains = function(target) {
    let current = this.head
    while (current !==null) {
      if(current.value === target) {
        return true
      } else {
        current = current.next
      }
    }
    return false
  };
  return list;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// // proto
// var LinkedList = function() {
//   let linkedList = Object.create(methods);
//   linkedList.head = null;
//   linkedList.tail = null;
//   return linkedList;
// }
// const methods = {}

//     methods.addToTail = function(value) {
//       var node = new Node(value)

//       if (this.head === null) {
//         this.head = node
//         this.tail = node
      
//       } else {
//         this.tail.next = node;
//         this.tail = node;
//       }
//       this.length++
//     },

//     methods.removeHead = function() {
//       const removedHead = this.head.value;
//       this.head = this.head.next;
//       return removedHead;
//     },

//     methods.contains = function() {
//       let current = this.head
//     while (current !==null) {
//       if(current.value === target) {
//         return true
//       } else {
//         current = current.next
//       }
//     }
//     return false;
//   }

var Node = function() {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
}

var LinkedList = function() {
  
}


