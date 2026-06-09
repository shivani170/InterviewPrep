
class Node {
  constructor(key, value){
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity){
    this.capacity = capacity
    this.head = new Node(-1, -1)
    this.tail = new Node(-1, -1)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.cache = new Map()
  }

  // Head => A => B => Tail
  // X

  addToFront(node){
    this.node.next = this.head.next
    this.node.prev = this.head

    this.head.next.prev = node
    this.head.next = node
  }

  // Head => X => A => B => Tail
  

  removeNode(node){
    this.node.prev.next = node.next
    this.node.next.prev = node.prev
  }

  movetoFront(node){
    removeNode(node)
    addToFront(node)
  }

  get(key){
    if(!this.cache.has(key)){
      return -1
    }
    const node = this.cache.get(key)
    this.movetoFront(node)
    return node.value
  }

  put(key, value){
     if(this.cache.has(key)){
      let node = this.cache.get(key)
      node.value= value
      this.movetoFront(node)   
      return  
    }

    const node = new Node(key, value)

    this.cache.set(key, node)



    if(this.cache.size > this.capacity){
    const lru = this.tail.prev

      this.removeNode(lru)
       this.cache.delete(lru.key);
    }

  }

}


const cache = new LRUCache(3)

cache.put(1,"A")
cache.put(2,"B")
cache.put(3,"C")
