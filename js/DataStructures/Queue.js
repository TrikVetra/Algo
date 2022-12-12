class Queue {
    constructor() {
        this.queue = {}
        this.head = 0
        this.tail = 0
    }
    add(item) {
        this.queue[this.tail] = item
        this.tail++
        console.log(this.queue)
    }
    delete(){
        if (this.tail === this.head) return undefined

        let element = this.queue[this.head]
        delete this.queue[this.head]
        this.head++
        return element
    }

}


