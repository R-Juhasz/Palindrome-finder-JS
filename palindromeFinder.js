function findPalindromes(input) {
    let palindromes = [];
  
    for (let str of input) {
      // Remove all non-letter characters and convert to lowercase
      let cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
      // Check if the cleaned string is a palindrome
      if (isPalindrome(cleanedStr)) {
        palindromes.push(str);
      }
    }
  
    // Sort the list of palindromes alphabetically
    palindromes.sort();
  
    console.log("Palindromes found:");
    for (let palindrome of palindromes) {
      console.log(palindrome);
    }
  }
  
  function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
  
    while (i < j) {
      if (str.charAt(i) !== str.charAt(j)) {
        return false;
      }
      i++;
      j--;
    }
  
    return true;
  }
  
  let input = ["racecar", "A man, a plan, a canal, Panama!", "hello", "Was it a car or a cat I saw?"];
  findPalindromes(input);
  