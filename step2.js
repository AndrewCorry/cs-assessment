function zeroSum(numArr){
    let sum = false
    for (let i = 0; i < numArr.length; i++) {
        for (let n = i+1; n < numArr.length; n++) {
            if(numArr[i] + numArr[n] === 0){
                sum = true
            }
        }
    }
return sum
}
console.log(zeroSum([1, 2, 3, -2]))
//runtime: O(n^2)
//space complexity: O(n^2)

function hasUniqueCharacter(word){
    let array = word.split("")
    let unique = true
    for (let start = 0; start < array.length; start++) {
        for (let next = start + 1; next < array.length; next++) {
            if(array[start] === array[next]){
                unique = false
            }
            
        }
        
    }
    return unique
}
console.log(hasUniqueCharacter('Monday'))
//runtime: O(n^2)
//space complexity: O(n^2)


function pangram (sentence){
    let outcome = false
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    sentence = sentence.toLowerCase()
    sentence = sentence.replace(/\s+/g, '');
    let sentArr = sentence.split('')
    console.log(sentArr)
    for (let i = 0; i < sentArr.length; i++) {
        for (let n = 0; n < alphabet.length; n++) {
            if (alphabet[n] === sentArr[i]) {
                alphabet.splice(n,1)
            }
            
        }
        
    }
    if(alphabet.length === 0){
        outcome = true
    }
    console.log(outcome) 
}
pangram("The quick brown fox jumps over the lazy dog!")

//runtime: O(n)
//space complexity: O(n)

function longestWord(strArr){
    let longest = strArr[0].length
    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i].length > longest){
            longest = strArr[i].length
        }   
    }
    return longest
}
console.log(longestWord(['hi', 'hello']))

//runtime: O(n)
//space complexity: O(n)
