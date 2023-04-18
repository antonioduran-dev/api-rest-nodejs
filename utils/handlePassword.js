const bcryptjs = require("bcryptjs");

/**
 * Contraseña sin encriptar: hello.01
 * @param {*} passwordPlain
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};
/**
 * Pasar contraseña sin encriptar y contraseña encriptada
 * @param {*} passwordPlain
 * @param {*} hashpassword
 */
const compare = async (passwordPlain, hashpassword) => {
  return await bcryptjs.compare(passwordPlain, hashpassword);
};

module.exports = { encrypt, compare };
