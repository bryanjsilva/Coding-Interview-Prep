function sym(args) {
    const argumentsNumber = arguments.length;
    let A = arguments[0];
    let B = arguments[1];
    let result;
    if(argumentsNumber <= 2){
        result = includes(A,B);
    }else{
        result = includes(A,B);
        for(let counter = 2; counter < argumentsNumber; counter ++){
            result = includes(result,arguments[counter]);
        }
    }
    console.log(result);
    return result;
  }

  function includes(A,B){
    let result = [];
    for(let counter = 0; counter < A.length; counter ++){
        if(!B.includes(A[counter]) && !result.includes(A[counter])){
            result.push(A[counter]);
        }
    }
    for(let counter = 0; counter < B.length; counter ++){
        if(!A.includes(B[counter]) && !result.includes(B[counter])){
            result.push(B[counter]);
        }
    }
    return result;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);