import { getApi } from "./api.js";
import { modal } from "./modal.js";
import { searchFilter } from "./filters.js";
const dataApi = await getApi()
console.log(dataApi)
export function affichageCards(data) {
    const containerCards = document.getElementById('container-cards')
    console.log(data.title, data.type, data.seasons)
    const cards = data.map(card => {
        let typeFilme = ""
        if(card.type === "movie"){
            typeFilme = `${data.duration} min`
        }
        else{
            typeFilme = `${card.seasons.length} Seasons`
        }
            return `
        <div id="${card.id}" class="filmes rounded-xl hover:tran bg-slate-900 hover:scale-102">
                <img src="${card.image}" alt="conveture filme" class="rounded-t-xl">
                <div class=" flex flex-col gap-1 p-2">
                    <div class="flex justify-between text-xs">
                        <span>${card.releaseYear}</span>
                        <span>${typeFilme}</span>
                    </div>
                    <h3 class="text-base font-semibold">${card.title}</h3>
                    <hr>
                    <div class="flex justify-start gap-2">
                        <span class="bg-slate-800 rounded-xl px-2 text-[10px] flex items-center">${card.type}</span>
                        <span class="bg-slate-800 rounded-xl px-2 text-[10px] flex items-center">${card.genres.join("-")}</span>
                    </div>
                </div>
            </div>
        `;
    })


    containerCards.innerHTML = cards.join("")
    console.log('test')
}

export function pagenation(datafilter, pageActuelle) {
    const limite = 8
    const start = (pageActuelle - 1) * limite
    const end = start + limite;

    const datapageni = datafilter.slice(start, end)
    const containerCards = document.getElementById("container-cards")
    containerCards.innerHTML = ""
    affichageCards(datapageni)


    const listePaenation = document.getElementById('listePaenation')
    const tab = [...Array(Math.ceil(datafilter.length / limite)).keys()]
    const tabAfficher = tab.map(element => {
        return `<li class="numberPage bg-slate-800 inline py-2 px-3 rounded-lg cursor-pointer hover:bg-slate-600" data-page="${element + 1}">${element + 1}</li>`
    })
    listePaenation.innerHTML = ""
    listePaenation.innerHTML = tabAfficher.join("")

    function renderNumberPage() {
        const listePaenation = document.getElementById("listePaenation");
        listePaenation.addEventListener("click", (event) => {
            const page = parseInt(event.target.dataset.page)
            pagenation(datafilter, page)
        })
    }
    renderNumberPage()
}


affichageCards(dataApi)
pagenation(dataApi, 1)
modal(dataApi)
searchFilter(dataApi, affichageCards)