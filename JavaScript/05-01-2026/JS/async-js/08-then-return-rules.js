Promise.resolve()
  .then(() => {
    console.log("A");
    return Promise.resolve("B");
  })
  .then((v) => {
    console.log(v);
    throw "C";
  })
  .catch((e) => {
    console.log(e);
    return "D";
  })
  .then((v) => {
    console.log(v);
  });
// Output:
// A
// B
// C
// D


// Explanation: // The first .then() run first and log "A"
// then it return a promiss.resove(""B") and its not gona wait or anything and move to next .then()
// Insite the next chain there is a argument v is waiting to get resoved valure from the fist .then() and get assinged the reterd value "B" and log it
// then it throw an error "C" and move to the catch block
// In the catch block the error "C" is catched and logged and then it return "D"
// then the last .then() get the value "D" and log it   

