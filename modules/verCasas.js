export const verCasas = (data, cont) => {
    cont.innerHTML = "";
    data.forEach(({ id, img, title, price, type, location, bed, bath, long, option }) => {
        cont.innerHTML += `
        <div class="propiedad shadow-sm">
        <section class="fondo">
            <img src="${img}" alt="">
            <div class="comprar">
                <button class="ver" id="${id}">For ${option}</button>
                <h5>$${price}/mo</h5>
            </div>
        </section>
        <section class="description">
            <p>${type}</p>
            <h3>${title}</h3>
            <p><img src="./img/map-pin.png" alt=""><span>${location}</span></p>
        </section>
        <section class="camas">
            <img src="./img/bed.png" alt=""><span>Beds ${bed}</span>
            <img src="./img/bath.png" alt=""><span>Bath ${bath}</span>
            <img src="./img/long.png" alt=""><span>${long} Mtr</span>
        </section>
    </div>
        `
    });
}