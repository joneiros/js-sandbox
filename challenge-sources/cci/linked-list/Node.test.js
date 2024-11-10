const Node = require("./Node");

describe('Node', () => {
    test('data', () => {
        let node = new Node("someData");

        expect(node.data).toEqual("someData");
    });

    test('linked data', () => {
        let node = new Node("someData");
        let node1 = new Node("otherData");
        node.next = node1;

        expect(node.next.data).toEqual("otherData");
    });
})