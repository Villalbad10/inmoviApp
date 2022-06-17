import { getData } from "../helpers/getData.js";
import { verCasas } from "../modules/verCasas.js";

const allPropiedades = document.querySelector('.allPropiedades');
const nFav = document.querySelector('.nFav');
const nCar = document.querySelector('.nCar');
const mfav = document.querySelector('.mfav');
const mcar = document.querySelector('.mcar');
const imgFav = document.querySelector('.imgFav');
const imgCar = document.querySelector('.imgCar');
const piscina = document.querySelector('.piscina');

document.addEventListener('DOMContentLoaded', async () => {
    const ca = await getData('car');
    const favori = await getData('fav');
    const data = await getData('items')

    nCar.textContent = await ca.length;
    nFav.textContent = favori.length;
    verCasas(data, allPropiedades);
})


document.addEventListener('click', async ({ target }) => {
    const data = await getData('items')

    if (target.classList.contains('ver')) {
        const detalle = data.find(casa => casa.id == target.id);
        console.log('detalle si', detalle);
        sessionStorage.setItem('detalle', JSON.stringify(detalle));
        window.location.href = './pages/detalle.html'
    }

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

piscina.addEventListener('click', async () => {
    const data = await getData('items')

    const pisFiltro = data.filter(categoria => categoria.pis == "Yes");

    verCasas(pisFiltro, allPropiedades)
})