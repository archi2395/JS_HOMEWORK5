let num = Number(prompt("Please enter number"));
let isSimple = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isSimple = false;
  }
}

alert(`${num} is ${isSimple && num > 1 ? "simple" : "not simple"}`);