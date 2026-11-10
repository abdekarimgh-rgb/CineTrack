import { modal } from "./modal.js";
import { affichageCards } from "./render.js";

export function searchFilter(dataApi, affichageCards) {
    const rechercher = document.getElementById('rechercher');
    const containeCards = document.getElementById('container-cards')

    const buttons = document.querySelectorAll("#filter button")

    let typeFilme = 'Tous'
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            button.style.backgroundColor = "red"
            typeFilme = button.dataset.type;
            console.log(typeFilme)
            filterFilms()
        })
    })

    function filterFilms() {
        const datafilter = dataApi.filter(data => {
            const resultSersh = data.title.toLowerCase().includes(sersh)
            const resultFilter = typeFilme === "Tous" || data.type === typeFilme
            return resultSersh && resultFilter;
        })
        console.log(datafilter)
        containeCards.innerHTML = ""
        
        affichageCards(datafilter)
        modal(datafilter)
    }

    let sersh = ""
    rechercher.addEventListener('input', (e) => {
        sersh = e.target.value.trim().toLowerCase();
        console.log(sersh)
        filterFilms()
    })
}

