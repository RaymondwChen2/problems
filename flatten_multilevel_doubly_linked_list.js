// 430. Flatten a Multilevel Doubly Linked List
// Medium

// You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer.This child pointer may or may not point to a separate doubly linked list, also containing these special nodes.These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

// Given the head of the first level of the list, flatten the list so that all the nodes appear in a single - level, doubly linked list.Let curr be a node with a child list.The nodes in the child list should appear after curr and before curr.next in the flattened list.

// Return the head of the flattened list.The nodes in the list must have all of their child pointers set to null.

var flatten = function (head) {
    let currNode = head;
    let nextCurrNode;

    while (currNode) {
        if (currNode.child) {
            nextCurrNode = currNode.next;
            let childList = flatten(currNode.child);
            currNode.next = childList;
            childList.prev = currNode;
            currNode.child = null;
        }
        if (currNode.next === null && nextCurrNode) {
            currNode.next = nextCurrNode;
            nextCurrNode.prev = currNode;
            nextCurrNode = null;
        }
        currNode = currNode.next;
    }

    return head;
};

/// stack answer

var flatten = function (head) {
    let currNode = head;
    let stack = [];

    while (currNode) {
        if (currNode.child) {
            if (currNode.next) stack.push(currNode.next);
            currNode.next = currNode.child;
            currNode.child.prev = currNode;
            currNode.child = null;
        }

        if (currNode.next === null && stack.length !== 0) {
            currNode.next = stack[stack.length - 1];
            stack[stack.length - 1].prev = currNode;
            stack.pop();
        }

        currNode = currNode.next;
    }

    return head;
};