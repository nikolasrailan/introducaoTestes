function validaEmail(email){
  const result = email.includes('@gmail.com');
 
  if(result == false){
    throw new Error("email nao válido")
  }
  return "Email válido";
}

module.exports = validaEmail;