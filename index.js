class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  // account for collisions
  set(key,value){

    let memoryAddress = this._hash(key)
  

    if (!this.data[memoryAddress]){
      this.data[memoryAddress] = []
    }else {
      console.log("There is a item at this memory")
      }
    this.data[memoryAddress].push([key,value])
    return this.data
 
    
}

 get(key){
   let dataAtGivenKey =  this.data[this._hash(key)]
 

   for (let i = 0; i <dataAtGivenKey.length; i++){
     if (key === dataAtGivenKey[i][0])
       return dataAtGivenKey[i][1]
   }
   return "Error: The key was not found"
}
keys(){
  let keysArray = []
  for (let e = 0; e<this.data.length;e++){
    if (!this.data[e]){
      continue
    }else
      keysArray.push(this.data[e][0][0])
  }
  return keysArray
}
}


const myHashTable = new HashTable(25);

console.log(myHashTable.set('grapes', 23423))
console.log(myHashTable.set('oranges', 90))

console.log(myHashTable.set('strawberries', 16))
console.log(myHashTable.set('kiwi', 54))
console.log(myHashTable.get('grapes'))
console.log(myHashTable.keys())

