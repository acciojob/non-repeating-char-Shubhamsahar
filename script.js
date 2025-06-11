function firstNonRepeatedChar(str) {
 // Write your code here
	
    let charCount = new Map();

    
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    
    for (let char of s) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
