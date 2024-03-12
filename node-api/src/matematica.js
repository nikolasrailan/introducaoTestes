function dividir(dividendo, divisor){
  if(dividor === 0){
    throw new Error("Divisão por zero nao é permitida")
  }
  return dividendo / divisor;
}

module.exports = dividir;