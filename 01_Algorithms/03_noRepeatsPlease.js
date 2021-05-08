function permAlone(str) {
  return str;
}

function factorial(number){
    let resultado = 1;
    for(let i = number; i > 1; i--){
      resultado *= i;
    }
    return resultado;
}

permAlone('aab');