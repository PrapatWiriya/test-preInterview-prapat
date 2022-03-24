let a = 1
let b = 2
let c = ''
console.log(`a = ${a}, b = ${b}, c = ${c}`)
a += 0
b = a + c
if (b === a) {
   console.log('a equal b')
} else {
   console.log('something went wrong')		
}

console.log("คำตอบคือ something went wrong เนื่องจาก a เป็น int , b ที่เกิดจาก a+c จะเป็น string")