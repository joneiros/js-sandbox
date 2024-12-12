const Node = require("./Node");
class LinkedList {

    /**
     *
     * @param {Node} head
     */
    constructor(head = null) {
        this.head = head;
    }

    clear() {
        this.head = null;
    }

    get first() {
        return this.head;
    }

    get last() {
        let last = this.head
        if(!last) {
            return null;
        }
        while(last.next) {
            last = last.next;
        }

        return last;
    }

    get size() {
        let count = 0;
        let next = this.head;
        while(next) {
            next = next.next;
            count++;
        }

        return count;
    }
}

module.exports = LinkedList;