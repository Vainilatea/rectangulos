class Rectangulo {
    constructor(alto, ancho) {

        this.alto = alto;
        this.ancho = ancho;
    }

    describete() {
        console.log(`El rectángulo es de ${this.alto} x ${this.ancho}`);
    }

    crece() {
        this.alto += 1;
        this.ancho++;
    }

    calcularArea() {
        return this.alto * this.ancho;
    }
}

// 1
const generarAleatorio = () => Math.floor(Math.random() * 10) + 1;

const rectangulos = [];
for (let i = 0; i < 1000; i++) {
    const alto = generarAleatorio();
    const ancho = generarAleatorio();
    rectangulos.push(new Rectangulo(alto, ancho));
}

// 2
rectangulos.forEach((rectangulo, index) => {
    const area = rectangulo.calcularArea();
    console.log(`Rectángulo ${index + 1}: ${rectangulo.alto} x ${rectangulo.ancho}, Área: ${area}m²`);
});
