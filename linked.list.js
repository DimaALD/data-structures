class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        this.head = new LinkedListNode(value, this.head);

        if (!this.tail) {
            this.tail = this.head;
        }

        return this;
    }

    prepend(value) {
        const node = new LinkedListNode(value);

        if (!(this.head)) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;

        return this;
    }

    find(value) {
        let node = this.head;

        while (node) {
            if (node.value === value) {
                return node;
            } else {
                node = node.next;
            }
        }

        return null;
    }

    deleteTail() {
        let node = this.head;

        while (node) {
            if (node.next === this.tail) {
                node.next = null;
                this.tail = node;
            } else {
                node = node.next;
            }
        }

        return this;
    }

    deleteHead() {
        if (this.head) {
            this.head = this.head.next;
        }

        return this;
    }

    fromArray(array) {
        array.forEach((node) => this.prepend(node));

        return this;
    }

    toArray() {
        let node = this.head;
        const arrayOfNodes = [];

        while (node) {
            arrayOfNodes.push(node);
            node = node.next;
        }

        return arrayOfNodes;
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }

        this.tail = this.head;

        this.head = prevNode;

        return this;
    }

    delete(value) {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        if (this.head) {
            while (this.head && this.head.value === value) {
                this.head = this.head.next;
            }
        }
        if (this.head) {
            while (currNode) {
                nextNode = currNode.next;
                if (prevNode && currNode.value === value) {
                    prevNode.next = nextNode;
                } else {
                    prevNode = currNode;
                }
                currNode = nextNode;
            }
        }

        if (this.tail && this.tail.value === value) {
            this.tail = prevNode;
        }

        return this;
    }

}


module.exports = LinkedList;
