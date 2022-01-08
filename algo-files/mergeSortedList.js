// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

console.time("Runtime");

const mergeTwoLists = (list1, list2) => {
    let stack = [];

    let loopList = [];
    let otherList = [];

    if (!list2.length) {
        return list1;
    }

    if (!list1.length) {
        return list2;
    }

    if (list1.length < 1 && list2.length < 1) {
        return stack;
    }

    if (list1.length == list2.length) {
        loopList = list1;
        otherList = list2;
    } else if (list1.length > list2.length) {
        loopList = list2;
        otherList = list1;
    } else {
        loopList = list1;
        otherList = list2;
    }

    for (let i = 0; i < loopList.length; i++) {
        const element = loopList[i];
        stack.push(element);

        if (element <= otherList[i]) {
            stack.push(otherList[i]);
        }

        if (otherList[i] < element) {
            stack.unshift(otherList[i]);
        }
    }

    return stack;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

console.timeEnd("Runtime");
