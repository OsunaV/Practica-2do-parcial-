const productos = [
{
    nombre : 'Televisor LG Smart TV 38"',
    descripcion: 'Televisor de 50 pulgadas de resolucion 4K.',
    precio: 559.9,
    imagen: 'img1.jpeg'
},
{
    nombre : 'Samsung s24 ultra"',
    descripcion: 'Telefono ultima generacion con cámara alta resolucion',
    precio: 889.99, 
    imagen: 'img2.jpeg'
},
{
    nombre: 'Television pantalla 24" JVC',
    descripcion: 'Portatil ligero y potente, ideal para el trabajo y estudio.',
    precio: 1200.00,
    imagen: 'img3.jpeg'
}

];

const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';


    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button')
    boton.className = 'btn-comprar';
    boton.textContent = 'comprar';

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

window.onload = renderizarCatalogo;