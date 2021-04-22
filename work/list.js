function node (val) {
    return {
        val,
        next: null
    }
}

class NodeList {
    constructor (val = '') {
        this.val = node(val)
        this.last = this.val
    }
    push(val) {
        const last = node(val)
        this.last.next = last
        this.last = last
    }
    pop() {
        let last = this.val
        let beforeLast
        while (last.next) {
            beforeLast = last
            last = last.next
        }
        if (beforeLast) {
            beforeLast.next = null
            this.last = beforeLast
        }
    }
}