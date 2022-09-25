const chalk = require("chalk");

module.exports = {
  name: "err",
  execute(err) {
    console.log(
      chalk.red(
        `Ha ocurrido un error en la conexión de la base de datos:\n${err}`
      )
    );
  },
};
