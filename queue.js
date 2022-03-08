class Queue {
    constructor() {
        this.queue = {};
        this.length = 0;
    }

    enqueue(item) {
        this.queue[this.length] = item;
        this.length++;
    }

    dequeue() {
        if (this.length > 0) {
            const item = this.queue[0];
            this.length--;
            delete this.queue[0];
            for (const key in this.queue) {
                this.queue[key - 1] = this.queue[key];
                delete this.queue[key];
            }

            return item;
        } else {
            return undefined;
        }
    }

    front() {
        return this.queue[0];
    }

    isEmpty() {
        return !!this.length;
    }

    size() {
        return this.length;
    }
}

module.exports = Queue;
