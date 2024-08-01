import{
  capitalize,
  reverseStr,
  calculator,
  caesarCipher,
  analyzeArray
} from './file';

//capitalize
test('This function needs to capitalize the first letter', () => {
  expect(capitalize("these words")).toBe("These words");
});

//string reverses
test("This function reverses a string", () =>{
  expect(reverseStr("hello")).toBe("olleh");
});

//calculator
test("This function adds 2 numbers", () =>{
  expect(calculator.add(7,1)).toBe(8);
});
test("This function subtracts 2 numbers", () =>{
  expect(calculator.sub(15, 4)).toBe(11);
});
test("This function multiplies 2 numbers", () =>{
  expect(calculator.mul(2,9)).toBe(18);
});
test("This function divides 2 numbers", () =>{
  expect(calculator.div(6,2)).toBe(3);
});


// Caesar Cipher

test("This function shifts a string", () =>{
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Shifts a string with different letter sizes", () =>{
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("This function shifts a string with punctuation", () =>{
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// analyze array

test("This function creates an object with avg property", () =>{
  const result = analyzeArray([1,8,3,4,2,6]);
  expect(result.average).toBe(4);
});

test("This function creates an object with min property", () =>{
  const result = analyzeArray([1,8,3,4,2,6]);
  expect(result.min).toBe(1);
});

test("This function creates an object with max property", () =>{
  const result = analyzeArray([1,8,3,4,2,6]);
  expect(result.max).toBe(8);
});
test("This function creates an object with length property", () =>{
  const result = analyzeArray([1,8,3,4,2,6]);
  expect(result.length).toBe(6);
});