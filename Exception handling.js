//In a try catch construction, wrap the code: console.log (a), let a = 3. 
//And display an error - let must be declared before use. 
//When running 1/0, the error 'cannot be divided by zero'
try {
    console.log (a); 
    let a = 3;
  } catch (err) {
    console.log("let must be declared before use");
  }

  try {
    let b = 1/0;
    console.log (b);
    if (b == Infinity) {
        throw new Error("cannot be divided by zero");
    } 
    
  } 
  catch (errZero) {
    console.log(errZero.message); 
  }