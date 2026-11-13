import { modal } from "./modal.js";
import { affichageCards, pagenation } from "./render.js";

export function searchFilter(dataApi, affichageCards) {
    const rechercher = document.getElementById('rechercher');
    const containeCards = document.getElementById('container-cards')

    const buttons = document.querySelectorAll("#filter button")

    let typeFilme = 'Tous'
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            button.style.backgroundColor = "red"
            typeFilme = button.dataset.type;

            filterFilms()
        })
    })


    function filterFilms() {
        const datafilter = dataApi.filter(data => {
            const resultSersh = data.title.toLowerCase().includes(sersh)
            const resultFilter = typeFilme === "Tous" || data.type === typeFilme
            return resultSersh && resultFilter;
        })
        
        containeCards.innerHTML = ""
        styleBtnFilter()
        affichageCards(datafilter)
        pagenation(datafilter, 1)
        modal(datafilter)
    }

    let sersh = ""
    rechercher.addEventListener('input', (e) => {
        sersh = e.target.value.trim().toLowerCase();
        filterFilms()
    })
    
}

function styleBtnFilter(){
    const btn = document.getElementById("filter");
    const btnFilter = document.querySelectorAll(".btn-filter")


    btn.addEventListener('click', (event) =>{
        const button = event.target.closest(".btn-filter")
        
        btnFilter.forEach(Element =>{
            if(Element === button){
                Element.classList.add("bg-red-800")
            }
            else{
                Element.classList.remove("bg-red-800")

                if(Element.style.backgroundColor === "red"){
                    Element.style.backgroundColor = ""
                }
            }
        })
    })
}