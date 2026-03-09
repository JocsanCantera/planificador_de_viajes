import { calcularCosto } from "./costos.js";

const destinos = [];

export const registrarDestino = (
    destino,
    fecha,
    transporte,
    { alojamiento = "Hotel", noches = 0, personas = 1 } = {}
) => {

    const nuevoViaje = {

        destino,
        fecha,
        transporte,
        alojamiento,
        noches,
        personas,

        costo: calcularCosto({
            destino,
            transporte,
            alojamiento,
            noches,
            personas
        })
    };

    destinos.push(nuevoViaje);

    return nuevoViaje;
};

export const obtenerItinerario = () => {

    return [...destinos];
};

export const mostrarItinerario = () => {

    if (destinos.length === 0) {
        console.log("No hay viajes registrados.");
        return;
    }

    destinos.forEach((viaje, idx) => {

        console.log(`#${idx + 1}`);

        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Alojamiento: ${viaje.alojamiento} (${viaje.noches} noches)`);
        console.log(`Personas: ${viaje.personas}`);

        console.log(`Costo total estimado: $${viaje.costo}`);

        console.log("---------------------------");
    });
};