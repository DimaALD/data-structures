class Stack {
    constructor() {
        this.container = {};
        this.size = 0;
    }

    push(element) {
        this.container[this.size] = element;
        this.size++;
    }

    pop() {
        if (this.size > 0) {
            const element = this.container[this.size - 1];
            delete this.container[this.size - 1];
            this.size--;
            return element;
        } else {
            return undefined;
        }
    }

    peek() {
        return this.size > 0 ? this.container[this.size - 1] : undefined;
    }

    length() {
        return this.size;
    }
}

module.exports = Stack;
