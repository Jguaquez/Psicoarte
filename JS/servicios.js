function showService(service) {
    const content = {
        fotografia: `
            <h2>Fotografía</h2>
            <img src="https://media.githubusercontent.com/media/Jguaquez/Psicoarte/main/images/fotografia.png" loading="lazy" alt="Fotografía" width="50">
            <p>Sesiones de fotografía profesional, apturamos imágenes que trascienden lo convencional, explorando lo macabro, lo psicológico y lo visceral. Cada sesión es una narrativa visual que confronta lo reprimido, lo extraño y lo simbólico, fusionando arte y emoción en composiciones que inquietan e invitan a la reflexión.</p>
            
        `,
        pintura: `
            <h2>Pintura</h2>
            <p>Llevamos lo perturbador y lo filosófico al lienzo, creando obras que desentrañan la psique y los límites de la percepción. Desde la abstracción hasta la representación cruda de lo humano, cada pintura es una pieza única que desafía la normalidad y revela lo que muchos prefieren ignorar.</p>
            <img src="https://media.githubusercontent.com/media/Jguaquez/Psicoarte/main/imagenes/pintura.jpg" alt="Pintura" width="50">
        `,
        idea: `
            <h2>Crea tu Idea</h2>
            <img src="https://media.githubusercontent.com/media/Jguaquez/Psicoarte/main/images/mascota.png" alt="Idea" width="50">
            <p>Si tienes una visión, un pensamiento oscuro o un concepto profundo que deseas transformar en arte, lo materializamos por ti. Convertimos tus ideas en una obra personalizada que exprese lo que las palabras no pueden decir, con la estética y la intensidad que caracterizan a Psicoarte.</p>
            
        `,
        escultura: `
            <h2>Arte Pagano</h2>
            <p>Creación de esculturas y artefactos con madera, hueso y piedra, inspirados en la simbología pagana y el arte nórdico. Cada pieza es un objeto ritualizado, cargado de significado y conexión con la naturaleza, lo ancestral y lo espiritual. Estas obras no solo son elementos decorativos, sino representaciones tangibles de creencias y filosofía.</p>
            <img src="https://media.githubusercontent.com/media/Jguaquez/Psicoarte/main/images/artesanias1.png" alt="Escultura" width="30">
        `,
        portadas: `
            <h2>Diseño de Portadas</h2>
            <img src="https://media.githubusercontent.com/media/Jguaquez/Psicoarte/main/images/portada1.png" alt="Idea" width="3">
            <p>Desde portadas hasta logos, stickers y piezas visuales, ofrecemos diseños que capturan la esencia del caos, la oscuridad y la transgresión. Si buscas una imagen que represente tu visión artística, filosófica o simbólica, Psicoarte la materializa con un estilo crudo, profundo y sin concesiones.</p>
           
        `
    };

    document.getElementById("service-content").innerHTML = content[service] || `
        <h2>Selecciona un servicio</h2>
        <p>Haz clic en un servicio para ver más detalles.</p>
    `;
}

