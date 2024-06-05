let recetario = [
    {
        nombre: "spaghetti",
        ingredientes: ["Spaghetti", "Salsa de tomate", "Queso parmesano rallado", "Aceite de oliva", "Sal y pimienta al gusto"],
        preparacion: [
            "Cocina el spaghetti en agua hirviendo con sal hasta que esté al dente.",
            "Escurre el spaghetti y mézclalo con la salsa de tomate caliente.",
            "Sirve el spaghetti en platos y espolvorea queso parmesano rallado encima.",
            "¡Disfruta tu delicioso plato de spaghetti!"
        ],
        video: "https://www.youtube.com/embed/https://www.youtube.com/watch?v=g2F5RO6vNSs"
    },
    {
        nombre: "ensalada",
        ingredientes: ["Lechuga", "Tomate", "Pepino", "Zanahoria", "Aceite de oliva", "Vinagre balsámico", "Sal y pimienta al gusto"],
        preparacion: [
            "Lava y corta la lechuga, el tomate, el pepino y la zanahoria en trozos.",
            "Mezcla todos los ingredientes en un tazón grande.",
            "Aliña la ensalada con aceite de oliva, vinagre balsámico, sal y pimienta al gusto.",
            "¡Sirve y disfruta de tu fresca ensalada!"
        ],
        video: "https://www.youtube.com/embed/https://www.youtube.com/watch?v=g2F5RO6vNSs"
    },
    {
        nombre: "pizza",
        ingredientes: ["Masa de pizza", "Salsa de tomate", "Queso mozzarella rallado", "Ingredientes adicionales (jamón, champiñones, etc.)", "Aceite de oliva", "Sal y pimienta al gusto"],
        preparacion: [
            "Extiende la masa de pizza en una bandeja para hornear.",
            "Unta la salsa de tomate sobre la masa.",
            "Esparce el queso mozzarella rallado sobre la salsa.",
            "Agrega los ingredientes adicionales según tu preferencia.",
            "Salpica con aceite de oliva, sal y pimienta al gusto.",
            "Hornea la pizza a temperatura alta hasta que esté dorada y crujiente.",
            "¡Disfruta de tu deliciosa pizza casera!"
        ],
        video: "https://www.youtube.com/embed/https://www.youtube.com/watch?v=g2F5RO6vNSs"
    
    },
    {
        nombre: "hamburguesa",
        ingredientes: ["300g de carne molida", "Pan de hamburguesa", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Sal y pimienta al gusto", "Salsa de tomate, mostaza, mayonesa (opcional)"],
        preparacion: [
            "Divide la carne molida en porciones y forma las hamburguesas.",
            "Sazona las hamburguesas con sal y pimienta al gusto.",
            "Cocina las hamburguesas a la parrilla o en una sartén caliente hasta que estén doradas por ambos lados y cocidas completamente.",
            "Asa ligeramente los panes de hamburguesa en la parrilla o en una sartén.",
            "Arma las hamburguesas colocando una hamburguesa cocida en un pan, agrega una loncha de queso cheddar, lechuga, rodajas de tomate y cebolla al gusto.",
            "Agrega las salsas deseadas (salsa de tomate, mostaza, mayonesa).",
            "Sirve caliente y ¡disfruta de tu hamburguesa casera!"
        ],
        video: "https://www.youtube.com/embed/https://www.youtube.com/watch?v=g2F5RO6vNSs"
    },
    {
        nombre: "tacos",
        ingredientes: ["Tortillas de maíz o harina", "Carne (res, pollo, cerdo)", "Vegetales (cebolla, pimientos, tomate)", "Queso rallado", "Lechuga", "Salsa (roja, verde, guacamole)", "Sal y pimienta al gusto"],
        preparacion: [
            "Cocina la carne con sal y pimienta al gusto.",
            "Calienta las tortillas de maíz o harina.",
            "Rellena las tortillas con la carne cocida, vegetales, queso rallado, lechuga y salsa al gusto.",
            "Sirve los tacos calientes y ¡disfruta de esta deliciosa comida mexicana!"
        ],
        video: "https://www.youtube.com/embed/https://www.youtube.com/watch?v=g2F5RO6vNSs"
    }
];

function buscar() {
    const name = document.getElementById('nombre').value.toLowerCase().trim();
    let recetaEncontrada = null;

    for (let i = 0; i < recetario.length; i++) {
        if (recetario[i].nombre === name) {
            recetaEncontrada = recetario[i];
            break;
        }
    }

    const recetaDiv = document.getElementById('receta');
    recetaDiv.innerHTML = '';

    if (recetaEncontrada) {
        recetaDiv.innerHTML = `
            <h3>${recetaEncontrada.nombre.charAt(0).toUpperCase() + recetaEncontrada.nombre.slice(1)}</h3>
            <h4>Ingredientes:</h4>
            <ul>${recetaEncontrada.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}</ul>
            <h4>Preparación:</h4>
            <ol>${recetaEncontrada.preparacion.map(paso => `<li>${paso}</li>`).join('')}</ol>
            <h4>Video:</h4>
            <iframe width="560" height="315" src="${recetaEncontrada.video}" frameborder="0" allowfullscreen></iframe>
        `;
    } else {
        alert("Receta no encontrada");
    }
}

function mostrarReceta(nombre) {
    const receta = recetario.find(r => r.nombre === nombre.toLowerCase());
    if (receta) {
        const recetaDiv = document.getElementById('receta');
        recetaDiv.innerHTML = `
            <h3>${receta.nombre.charAt(0).toUpperCase() + receta.nombre.slice(1)}</h3>
            <h4>Ingredientes:</h4>
            <ul>${receta.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}</ul>
            <h4>Preparación:</h4>
            <ol>${receta.preparacion.map(paso => `<li>${paso}</li>`).join('')}</ol>
            <h4>Video:</h4>
            <iframe width="560" height="315" src="${receta.video}" frameborder="0" allowfullscreen></iframe>
        `;
    } else {
        alert("Receta no encontrada");
    }
}


