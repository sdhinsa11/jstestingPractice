export{
  capitalize,
  reverseStr,
  calculator,
  caesarCipher,
  analyzeArray
};

function capitalize(wrd){
  return wrd.charAt(0).toUpperCase() + wrd.slice(1);
}

function reverseStr(str){
  return str.split("").reverse().join("");

}

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();


function caesarCipher(str, shift){
  var output = "";
   
  // Loop through each character in the input string
  for (var i = 0; i < str.length; i++) {
    var ascii = str[i].charCodeAt();
     
    // Check if the character is a letter
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      // Shift the letter by the shift amount, wrapping around the alphabet if necessary
      ascii += shift;
      if ((ascii > 90 && str[i] <= 'Z') || ascii > 122) {
        ascii -= 26;
      }
    }
     
    // Add the new character to the output string
    output += String.fromCharCode(ascii);
  }
   
  // Return the output string
  return output;
}


//analyze array

function analyzeArray(list){
  var object = {};

  let sum=0;
  for(let i =0; i< list.length; i++){
    sum += list[i]
  }
  object.average = sum/list.length;
  object.min = Math.min(...list);
  object.max = Math.max(...list);
  object.length = list.length;

  return object;
}