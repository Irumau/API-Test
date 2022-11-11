const btn = document.querySelector('[data-button]');

const URL2 = ' https://api.thecatapi.com/v1/images/search'
fetch(URL2).then((response)=> response.json()).then((data)=>{
    const img = document.querySelector('img');
    img.src = data[0].url;
})


btn.addEventListener('click',actualizarImagen = ()=>{
    const URL2 = ' https://api.thecatapi.com/v1/images/search'
    return fetch(URL2).then((response)=> response.json()).then((data)=>{
        const img = document.querySelector('img');
        img.src = data[0].url;
    })
})







// const añadirElemento = ()=>{
//     const div = document.querySelector('[data-container-button]');

//     const a = document.createElement('a');
//     a.textContent = 'Download'
//     a.setAttribute('download','gato')
//     div.appendChild(a)
// }

// añadirElemento()