function Tabla() {

    this.tabla = [];
    this.tapada = [];
    for (var f = 0; f < 5; f++) {
        this.tabla[f] = [];
        this.tapada[f] = [];
        for (var c = 0; c < 5; c++) {
            //solo cuando no sea la posicion central
            if (!(c == 2 && f == 2)) {
                this.tabla[f][c] = c * 15 + Math.floor(Math.random() * 15) + 1;
            }
            else {
                this.tabla[f][c] = 0;
            }
            this.tapada[f][c] = false;
        }
    }

    this.taparNumero = function (balotaSacada) {
        for (var f = 0; f < 5; f++) {
            for (var c = 0; c < 5; c++) {
                if (this.tabla[f][c] == balotaSacada) {
                    this.tapada[f][c] = true;
                }
            }
        }
    }
}    
