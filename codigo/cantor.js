function Cantor() {

    this.tabla = [];
    for (var f = 0; f < 15; f++) {
        this.tabla[f] = [];
        for (var c = 0; c < 5; c++) {
            this.tabla[f][c] = c * 15 + f * 1;
        }
    }
}