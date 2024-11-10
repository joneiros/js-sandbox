const LinkedList = require("./LinkedList");
const Node = require("./Node");

describe('LinkedList', () => {
    test('data', () => {
        let node = new Node("someData");
        let node2 = new Node("otherData");
        node.next = node2;
        let ll = new LinkedList(node);

        expect(ll.head.data).toEqual("someData");
    });

    test('first', () => {
        let node = new Node("someData");
        let node2 = new Node("datData");
        let node3 = new Node("otherData");
        node2.next = node3;
        node.next = node2;
        let ll = new LinkedList(node);

        expect(ll.first.data).toEqual("someData");
    });

    test('last', () => {
        let node = new Node("someData");
        let node2 = new Node("datData");
        let node3 = new Node("otherData");
        node2.next = node3;
        node.next = node2;
        let ll = new LinkedList(node);

        expect(ll.last.data).toEqual("otherData");
    });

    test('size', () => {
        let node = new Node("someData");
        let node2 = new Node("datData");
        let node3 = new Node("otherData");
        node2.next = node3;
        node.next = node2;
        let ll = new LinkedList(node);

        expect(ll.size).toEqual(3);
    });

    test('size', () => {
        let node = new Node("someData");
        let node2 = new Node("datData");
        let node3 = new Node("otherData");
        node2.next = node3;
        node.next = node2;
        let ll = new LinkedList(node);

        ll.clear();
        expect(ll.size).toEqual(0);
    });
})