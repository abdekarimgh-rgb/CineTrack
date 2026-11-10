import { getApi } from "./api.js";
import { modal } from "./modal.js";
import { searchFilter } from "./filters.js";
const dataApi = await getApi()
console.log(dataApi)
export function affichageCards(data) {
    const containerCards = document.getElementById('container-cards')
    const cards = data.map(card => {
        if (card.type === "movie") {
            return `
        <div id="${card.id}" class="filmes rounded-xl hover:tran bg-slate-900 ">
                <img src="${card.image}" alt="conveture filme" class="rounded-t-xl">
                <div class=" flex flex-col gap-1 p-2">
                    <div class="flex justify-between text-xs">
                        <span>${card.releaseYear}</span>
                        <span>${card.duration} min</span>
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
        }
        else{
            return `
        <div id="${card.id}" class="filmes rounded-xl hover:tran bg-slate-900 ">
                <img src="${card.image}" alt="conveture filme" class="rounded-t-xl">
                <div class=" flex flex-col gap-1 p-2">
                    <div class="flex justify-between ">
                        <span>${card.releaseYear}</span>
                        <span>${card.seasons.length} Seasons</span>
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
        }
    })


    containerCards.innerHTML = cards.join("")
    console.log('test')
}
affichageCards(dataApi)
modal(dataApi)
searchFilter(dataApi, affichageCards)