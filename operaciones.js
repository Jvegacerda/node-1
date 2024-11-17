const fs = require('fs');


function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;}

        const citas = JSON.parse(data); 
        const nuevasCitas = [...citas, nuevaCita]; 


    fs.writeFile('citas.json', JSON.stringify(nuevasCitas, null, 3), 'utf8', 
        (err) => {if (err) {console.error('Error al guardar el archivo:', err);
                return;}
            console.log(`Cita registrada para ${nombre}.`);
        });
    });
}



function leer() {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) throw err; 

        const citas = JSON.parse(data); 
        if (citas.length === 0) {
            console.log('No hay citas registradas.');
        } else {
            console.log("Citas registradas:", citas);
        }
    }); 
}

module.exports = { registrar, leer };

