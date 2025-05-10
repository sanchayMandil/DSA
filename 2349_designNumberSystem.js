class NumberContainers {
    constructor() {
        this.indexToNumber = new Map();
        this.numberToIndices = new Map(); 
    }

    change(index, number) {
        if (this.indexToNumber.has(index)) {
            const oldNumber = this.indexToNumber.get(index);
            const oldIndices = this.numberToIndices.get(oldNumber);
            if (oldIndices) {
                oldIndices.delete(index); 
                if (oldIndices.size === 0) {
                    this.numberToIndices.delete(oldNumber);
                }
            }
        }

        this.indexToNumber.set(index, number);
        if (!this.numberToIndices.has(number)) {
            this.numberToIndices.set(number, new MinHeap()); 
        }
        this.numberToIndices.get(number).insert(index);
    }

    find(number) {
        if (!this.numberToIndices.has(number)) {
            return -1;
        }

        const minHeap = this.numberToIndices.get(number);
        return minHeap.size() > 0 ? minHeap.peek() : -1; 
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
        this.indexMap = new Map(); 
    }

    insert(value) {
        this.heap.push(value);
        this.indexMap.set(value, this.heap.length - 1); 
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        const min = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.indexMap.delete(min); 
        this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0]; 
    }

    delete(value) {
        const index = this.indexMap.get(value);
        if (index === undefined) {
            return; // Element not found in the heap
        }

        this.swap(index, this.heap.length - 1);
        this.indexMap.delete(value); 
        this.heap.pop();

        this.heapifyDown(index); 
        this.bubbleUp(index); 
    }

    size() {
        return this.heap.length;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        this.indexMap.set(this.heap[i], i);
        this.indexMap.set(this.heap[j], j);
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    bubbleUp(i) {
        while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    heapifyDown(i) {
        let smallest = i;
        const left = this.left(i);
        const right = this.right(i);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }
}