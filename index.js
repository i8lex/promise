const body = document.querySelector(`body`);
body.innerHTML =
    `<section class="section">
       <div class="container">
           <ul class="section__wrapper"></ul>
       </div>
    </section>`

/**
 *
 * @param {string} name
 * @param {string} photo
 * @param {string} position
 */

function renderData({ name, photo, position }) {
    const wrapper = document.querySelector(`.section__wrapper`);
    // wrapper.innerHTML = ``;

    const list = document.createElement(`li`);
    list.classList.add(`section__list`);
    list.innerHTML = `
        <h6 class="section__list__name">${name}</h6>
        <img class="section__list__photo" src="${photo}" alt="${name}">
        <p class="section__list__position">${position}</p>
    `
    wrapper.append(list)
}

/**
 *
 * @param {string} url
 * @param {string} method
 * @param {null} body
 * @returns {Promise<string>}
 */

function customFetch (url, { method = `GET`, body = null } = {} ) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.send(body);

        xhr.onload = () => {
             resolve(xhr.response);
        };

        xhr.onerror = () => {
            reject(`Error`)
        };
    });
}

customFetch(`https://users-api-id.herokuapp.com/users`)
    .then((result) =>{
    const data = JSON.parse(result)
        console.log(data)
        data.forEach(renderData);
})

