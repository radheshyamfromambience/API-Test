let num = 172;
let original = num;
let reverse = 0;

while (num > 0) {
  reverse = reverse * 10 + (num % 10);
  num = Math.floor(num / 10);
}

if (original === reverse) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
