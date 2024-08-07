class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1) current.next = l1;
    if (l2) current.next = l2;
    return dummy.next;
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    function divideAndConquer(start, end) {
        if (start === end) {
            return lists[start];
        }
        const mid = Math.floor((start + end) / 2);
        const left = divideAndConquer(start, mid);
        const right = divideAndConquer(mid + 1, end);
        return mergeTwoLists(left, right);
    }

    return divideAndConquer(0, lists.length - 1);
}

// function to convert the linklist to array
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Example usage
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));
const lists = [list1, list2, list3];
const mergedList = mergeKLists(lists);

console.log(linkedListToArray(mergedList));