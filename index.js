const body = document.querySelector(`body`);
body.innerHTML =
    `<section class="section">
       <div class="container">
           <ul class="section__wrapper">
               
           </ul>
       </div>
    </section>`


/**
 *
 * @param {data[]} arrData
 *
 * @param {{name, photo, position}} arrData
 */

function renderData(arrData) {
    const wrapper = document.querySelector(`.section__wrapper`);
    wrapper.innerHTML = ``;


    arrData.forEach((user) => {

        const list = document.createElement(`li`);
        list.classList.add(`section__list`);
        wrapper.append(list)

        const listName = document.createElement(`h6`);
        listName.className = `section__list__name`;
        listName.innerText = user.name
        list.append(listName)

        const listPhoto = document.createElement(`img`);
        listPhoto.className = `section__list__photo`;
        listPhoto.src = user.photo
        listPhoto.alt = user.name
        list.append(listPhoto)

        const listPosition = document.createElement(`p`);
        listPosition.className = `section__list__position`;
        listPosition.innerText = user.position;
        list.append(listPosition);
    })


    // arrData.forEach((user) => renderUser(user));

    // /**
    //  *
    //  * @param {{name, photo, position}} userData
    //  */

    // function renderUser(userData) {
    //
    //     const list = document.createElement(`li`);
    //     list.classList.add(`section__list`);
    //     wrapper.append(list)
    //
    //     const listName = document.createElement(`h6`);
    //     listName.className = `section__list__name`;
    //     listName.innerText = userData.name
    //     list.append(listName)
    //
    //     const listPhoto = document.createElement(`img`);
    //     listPhoto.className = `section__list__photo`;
    //     listPhoto.src = userData.photo
    //     listPhoto.alt = userData.name
    //     list.append(listPhoto)
    //
    //     const listPosition = document.createElement(`p`);
    //     listPosition.className = `section__list__position`;
    //     listPosition.innerText = userData.position;
    //     list.append(listPosition);
    // }
}


/**
 *
 * @param {string} url
 * @param {string} method
 * @param {null} body
 * @returns {Promise<string>}
 */

function fetch (url, { method = `GET`, body = null } = {} ) {
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

fetch(`https://users-api-id.herokuapp.com/users`)
    .then((result) =>{
    const data = JSON.parse(result)
        console.log(data)
        renderData(data);
})

