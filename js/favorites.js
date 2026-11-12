import { getApi } from "./api.js"

const data = getApi()

export function favoris(data) {

    const tabFavoris = JSON.parse(localStorage.getItem('favoris')) || [];
    reaffichage(tabFavoris)
    affichage()
    const buttons = document.querySelectorAll('.btnFavoris')

    buttons.forEach(Element => {
        Element.addEventListener("click", event => {
            event.stopPropagation()

            const button = event.target.closest('.btnFavoris')
            console.log(button.dataset.film)

            const filmeId = button.dataset.film

            const filme = data.find(film => film.id === filmeId)
          
            const icon = button.querySelector('svg')

            const existe = tabFavoris.some(elem => elem.id === filmeId)
        
            if (!existe) {
                tabFavoris.push(filme)
                icon.setAttribute('data-prefix', 'fas')
            }
            else {
                const index = tabFavoris.findIndex((element, i) => {

                    return element.id === filmeId
                })
                icon.setAttribute('data-prefix', 'far')
            
                tabFavoris.splice(index, 1)
            }
            sauvgarder(tabFavoris)
            console.log(tabFavoris)
            affichage()

            data.forEach(Element => {
                if (tabFavoris.some(Element => filme.id === Element.id)) {

                    console.log('test')
                    icon.setAttribute('data-prefix', 'fas')
                }

            })

        })
    })
    function affichage() {
        const contenairFavoris = document.getElementById('contenair-favoris')
        contenairFavoris.innerHTML = ""
        const mesFav = tabFavoris.map(element => {
            return  `
                 <div
                    class="relative flex gap-3 items-center text-slate-50 border rounded-lg p-1 bg-slate-950 border-slate-700">
                    <img class="h-16 rounded-lg"
                        src="${element.image}" alt="">
                    <div>
                        <h3 class="font-semibold mb-1">${element.title}</h3>
                        <span class="bg-amber-600 p-0.5 rounded-lg mr-1">${element.type}</span>
                        <span class="text-slate-400">2012</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 absolute right-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
             </div>
            `
        })
        contenairFavoris.innerHTML = mesFav.join('')
    }
}

function sauvgarder(tab){
    localStorage.setItem("favoris", JSON.stringify(tab))
}


function reaffichage(tab){
    const bottons = document.querySelectorAll(".btnFavoris")
    bottons.forEach(element=>{
        const filmId = element.dataset.film
        const existe = tab.find(T => T.id === filmId)

        const icon = element.querySelector("i")
       // console.log(icon)
        if(existe){
            icon.setAttribute("data-prefix", 'fas')
        }
        else{
            icon.setAttribute("data-prefix", 'far')
        }
    })
}