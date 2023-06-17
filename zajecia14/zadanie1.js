let arg = process.argv[2];
if (arg){
  console.log(`hello, ${arg}!`);
  return;
} 
console.log("Nie podales argumentu!");
