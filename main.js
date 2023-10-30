
// const productos = [
//     {
//         tipo: "Base",
//         opciones: [
//             { nombre: "Blanca", precio: 31000, cantidad: 500 },
//             { nombre: "Transparente", precio: 34000, cantidad: 500 },
//         ],
//     },
//     {
//         tipo: "Ingredientes",
//         opciones: [
//             { nombre: "Manzanilla", precio: 8100, cantidad: 20 },
//             { nombre: "Lavanda", precio: 8100, cantidad: 20 },
//             { nombre: "Menta", precio: 8100, cantidad: 20 },
//         ],
//         descuento: 0.1,
//     },
//     {
//         tipo: "Pigmentos",
//         opciones: [
//             { nombre: "Rojo", precio: 9300, cantidad: 5 },
//             { nombre: "Azul", precio: 9300, cantidad: 5 },
//             { nombre: "Naranja", precio: 9300, cantidad: 5 },
//         ],
//     },
// ];

// let menu = prompt(
//     "Ingrese el producto que desea comprar:\n 1. Base\n 2. Ingredientes\n 3. Pigmentos\n 4. Salir"
// );

// while (menu !== "4" && menu.toLowerCase() !== "salir") {
//     let seleccion;
//     if (isNaN(menu)) {
//         for (let i = 0; i < productos.length; i++) {
//             if (productos[i].tipo.toLowerCase() === menu.toLowerCase()) {
//                 seleccion = i;
//                 break;
//             }
//         }
//     } else {
//         seleccion = parseInt(menu.toLowerCase()) - 1;
//     }

//     if (seleccion >= 0 && seleccion < productos.length) {
//         const productoElegido = productos[seleccion];
//         const nombreProducto = productoElegido.tipo;

//         let subMenu = `Contamos con ${nombreProducto}:\n`;
//         for (let i = 0; i < productoElegido.opciones.length; i++) {
//             const opcion = productoElegido.opciones[i];
//             subMenu += `${i + 1}. ${opcion.nombre} - $${opcion.precio} (${opcion.cantidad
//                 }gr)\n`;
//         }

//         const opcion = prompt(`¿Cuál ${nombreProducto} deseas?\n${subMenu}`);

//         const indiceOpcion = parseInt(opcion) - 1;
//         if (indiceOpcion >= 0 && indiceOpcion < productoElegido.opciones.length) {
//             const producto = productoElegido.opciones[indiceOpcion];
//             if (!isNaN(producto.precio)) {
//                 const cantidad = parseInt(prompt("¿Cuantas unidades deseas?"));
//                 let valorTotal = cantidad * producto.precio;

//                 if (productoElegido.descuento) {
//                     valorTotal *= 1 - productoElegido.descuento;
//                 }

//                 alert(`Detalles del producto:\n
//                     Tipo: ${nombreProducto}\n
//                     Nombre: ${producto.nombre}\n
//                     Precio por unidad: $${producto.precio}\n
//                     Cantidad por unidad: ${producto.cantidad} gr\n
//                     Cantidad deseada: ${cantidad}\n
//                     Total: $${valorTotal}`);
//             } else {
//                 alert("Opción incorrecta");
//             }
//         } else {
//             alert("Opción incorrecta");
//         }
//     } else {
//         alert("Opción incorrecta");
//     }

//     menu = prompt(
//         "Ingrese el producto que desea comprar:\n 1. Base\n 2. Ingredientes\n 3. Pigmentos\n 4. Salir"
//     );
// }


const productos = [
    {
        tipo: "Base",
        opciones: [
            { nombre: "Blanca", precio: 31000, cantidad: 500 },
            { nombre: "Transparente", precio: 34000, cantidad: 500 },
        ],
    },
    {
        tipo: "Ingredientes",
        opciones: [
            { nombre: "Manzanilla", precio: 8100, cantidad: 20 },
            { nombre: "Lavanda", precio: 8100, cantidad: 20 },
            { nombre: "Menta", precio: 8100, cantidad: 20 },
        ],
        descuento: 0.1,
    },
    {
        tipo: "Pigmentos",
        opciones: [
            { nombre: "Rojo", precio: 9300, cantidad: 5 },
            { nombre: "Azul", precio: 9300, cantidad: 5 },
            { nombre: "Naranja", precio: 9300, cantidad: 5 },
        ],
    },
];

function mostrarProductos() {
    let opciones = "Ingrese el producto que desea comprar:\n";
    for (let i = 0; i < productos.length; i++) {
        opciones += ` ${i + 1}. ${productos[i].tipo}\n`;
    }
    opciones += " 4. Salir";
    return opciones;
}

function mostrarDetallesProducto(producto) {
    const { nombre, precio, cantidad } = producto;
    return `Detalles del producto:
        Nombre: ${nombre}
        Precio por unidad: $${precio}
        Cantidad por unidad: ${cantidad} gr`;
}

function obtenerProductoPorNombre(nombreProducto) {
    return productos.find(producto => producto.tipo.toLowerCase() === nombreProducto.toLowerCase());
}

let menu;
do {
    menu = prompt(mostrarProductos());

    if (menu === "4" || menu.toLowerCase() === "salir") {
        break;
    }

    let seleccion;

    if (!isNaN(menu)) {
        seleccion = parseInt(menu) - 1;
    } else {
        const productoElegido = obtenerProductoPorNombre(menu);
        if (productoElegido) {
            seleccion = productos.indexOf(productoElegido);
        }
    }

    if (seleccion >= 0 && seleccion < productos.length) {
        const productoElegido = productos[seleccion];
        const nombreProducto = productoElegido.tipo;

        let subMenu = `Contamos con ${nombreProducto}:\n`;
        for (let i = 0; i < productoElegido.opciones.length; i++) {
            const opcion = productoElegido.opciones[i];
            subMenu += `${i + 1}. ${opcion.nombre} - $${opcion.precio} (${opcion.cantidad}gr)\n`;
        }

        const opcion = prompt(`¿Cuál ${nombreProducto} deseas?\n${subMenu}`);
        const indiceOpcion = parseInt(opcion) - 1;

        if (indiceOpcion >= 0 && indiceOpcion < productoElegido.opciones.length) {
            const producto = productoElegido.opciones[indiceOpcion];
            if (!isNaN(producto.precio)) {
                const cantidad = parseInt(prompt("¿Cuantas unidades deseas?"));
                let valorTotal = cantidad * producto.precio;

                if (productoElegido.descuento) {
                    valorTotal *= 1 - productoElegido.descuento;
                }

                alert(mostrarDetallesProducto(producto) + `
                    Cantidad deseada: ${cantidad}
                    Total: $${valorTotal}`);
            } else {
                alert("Opción incorrecta");
            }
        } else {
            alert("Opción incorrecta");
        }
    } else {
        alert("Opción incorrecta");
    }
} while (menu !== "4" || menu.toLowerCase() !== "salir");