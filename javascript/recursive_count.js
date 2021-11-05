function recursiveCount(num = 0) {
  if (num >= 10) return;
  console.log(num);
  recursiveCount(num + 1);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// First,define the base case with return value. Then, 
// define the recursive function call, adding the change in
// arguement/parameter. 
