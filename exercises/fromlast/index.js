// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.head;
    let fast = list.head;

    // MY SOLUTION
    /*
        let counter = 0;
        
        while (fast.next) {
            fast = fast.next;
            counter++
        }
        for (let i = 0; i < counter - n; i++) {
            slow = slow.next;
        }
        return slow;
    */
    // MENDA'S SOLUTION
    while (n > 0) {
        fast = fast.next;
        n--
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

module.exports = fromLast;
