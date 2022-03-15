// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//     res.send("Estamos en yarn pa");
// })



// app.listen(PORT);

class Operaciones {
    constructor() {

    }
    suma (num1, num2) {
        return num1 + num2;
    }
    resta (num1, num2) {
        return num1-num2;
    }
    multiplicacion (num1, num2) {
        return num1 * num2;
    }
    division (num1, num2) {
        return num1 / num2;
    }
}

module.exports = new Operaciones();