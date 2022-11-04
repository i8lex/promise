const body = document.querySelector(`body`);
body.innerHTML =
    `<section class="section">
       <div class="container">
           <ul class="section__wrapper"></ul>
       </div>
    </section>`

/**
 * @param {object} obj
 * @param {string} obj.name
 * @param {string} obj.photo
 * @param {string} obj.position
 */

function renderData({ name, photo, position }) {
    const wrapper = document.querySelector(`.section__wrapper`);
    // wrapper.innerHTML = ``;

    const listItem = document.createElement(`li`);
    listItem.classList.add(`section__list`);
    listItem.innerHTML = `
        <h6 class="section__list__name">${name}</h6>
        <img class="section__list__photo" src="${photo}" alt="${name}">
        <p class="section__list__position">${position}</p>
    `
    wrapper.append(listItem)
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

