import { getData } from "../helpers/getData.js";
import { postData } from "../helpers/postData.js";

const de = document.querySelector('.de');
const casa = JSON.parse(sessionStorage.getItem('detalle'));
const nFav = document.querySelector('.nFav');
const nCar = document.querySelector('.nCar');
const mfav = document.querySelector('.mfav');
const mcar = document.querySelector('.mcar');
const imgFav = document.querySelector('.imgFav');
const imgCar = document.querySelector('.imgCar');
const { img, title, price, type, location, bed, bath, long, option, intel, park, pis, security, medic, librery, games } = casa;


document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData('car');
    const favori = await getData('fav');

    nCar.textContent = await data.length;
    nFav.textContent = favori.length;
})


de.innerHTML = `
<h1 class="registro">${title}</h1>
        <section class="row">
            <div class="col-md-6 sm-12">
                <img class="img-fluid"
                    src="${img}"
                    alt="">
            </div>
            <div class="col-md-6 sm-12 detalle">
                <button class="car">Add car</button> <button class="favo">Add fav</button>
                <span class="detalles">Tipo de propiedad:</span> <span>${type}</span>
                <span class="detalles">Precio:</span> <span>$${price}</span>
                <span class="detalles">Ubicación:</span> <span>${location}</span>
                <span class="detalles">N° habitaciones:</span> <span>${bed}</span>
                <span class="detalles">N° de baños:</span> <span>${bath}</span>
                <span class="detalles">Metros cuadrados:</span> <span>${long}</span>
                <span class="detalles">Oferta:</span> <span>${option}</span>
                <span class="detalles">¿Casa inteligente?:</span> <span>${intel}</span>
                <span class="detalles">¿Parqueadero?:</span> <span>${park}</span>
                <span class="detalles">¿Piscina?:</span> <span>${pis}</span>
                <span class="detalles">¿Seguridad privada?:</span> <span>${security}</span>
                <span class="detalles">¿Centro medico?:</span> <span>${medic}</span>
                <span class="detalles">Libreria?:</span> <span>${librery}</span>
                <span class="detalles">N° camas:</span> <span>${bed}</span>
                <span class="detalles">¿Zona de Juegos?:</span> <span>${games}</span>
            </div>
        </section>
`
const add = document.querySelector('.car');
const favo = document.querySelector('.favo');

add.addEventListener('click', () => {
    const car = {
        titulo: title,
        imagen: img,
        precio: price
    }
    postData('car', car);
})

favo.addEventListener('click', () => {
    const fa = {
        imagen: img,
        titulo: title,
        precio: price
    }

    postData('fav', fa)
})


imgFav.addEventListener('click', async () => {
    const data = await getData('fav');

    mfav.innerHTML = "";
    data.forEach(({ titulo, imagen, precio }) => {
        mfav.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${imagen}"
                        class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text">$${precio}         </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    });

})
imgCar.addEventListener('click', async () => {
    const data = await getData('car');
    mcar.innerHTML = "";
    data.forEach(({ titulo, imagen, precio }) => {
        mcar.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${imagen}"
                        class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text">$${precio}         </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    });

})