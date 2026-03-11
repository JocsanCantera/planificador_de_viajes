const COSTO_DESTINO = {
    Paris: 500,
    Londres: 400,
    "New York": 600,
    Tokio: 700,
    Madrid: 350,
};

const COSTO_TRANSPORTE = {
    "Avión": 200,
    Tren: 100,
    Autobús: 60,
};

const COSTO_ALOJAMIENTO_POR_NOCHE = {
    Hostal: 30,
    Hotel: 90,
    Airbnb: 70,
};

export const calcularCosto = ({
    destino,
    transporte,
    alojamiento,
    noches = 0,   
    personas = 1  
}) => {

    const baseDestino = COSTO_DESTINO[destino] ?? 0;

    const extraTransporte = COSTO_TRANSPORTE[transporte] ?? 0;

    const costoNoche = COSTO_ALOJAMIENTO_POR_NOCHE[alojamiento] ?? 0;

    let subtotal = (baseDestino + extraTransporte) * personas;

    subtotal += noches * costoNoche;

    const descuento =
        personas >= 5 ? 0.12 : 
            personas >= 3 ? 0.07 : 
                0;                     

    const total = subtotal * (1 - descuento);

    return Math.round(total);
};