

export function modal(dataApi) {
    const filmes = document.querySelectorAll('.filmes')
    filmes.forEach(filme => {
        filme.addEventListener('click', (e) => {
            const filmeInfo = dataApi.find(element => {
                return element.id === filme.id
            })

            const body = document.querySelector('body')
            const divModal = document.createElement('div')
            divModal.id = 'divModal'

            divModal.className = "fixed inset-0 z-50 flex justify-center items-center "

            let timeOrSeasons = ""
            if (filmeInfo.type === "movie") {
                timeOrSeasons = `${filmeInfo.duration} min`
            }
            else {
                timeOrSeasons = `${filmeInfo.seasons.length} Seasons` 
            }

            divModal.innerHTML = `
                            <div class="relative items-center border shadow-xl rounded-2xl p-4 bg-slate-900 flex flex-col gap-4 max-h-[90vh] overflow-y-auto sm:flex-row md:flex-row ">
                <button id="closeModal" class="absolute top-2 right-2 z-10 p-3 rounded-full bg-slate-700 hover:bg-red-500">✕</button>
                <img src="${filmeInfo.image}" alt="" class=" object-cover rounded-2xl max-w-60">
                <div class="flex flex-col gap-4">
                    <div class="flex gap-2 font-semibold text-slate-50">
                        <span class="bg-amber-600 rounded-sm px-2">${filmeInfo.type}</span>
                        <span>${filmeInfo.releaseYear}</span>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-50">${filmeInfo.title}</h3>
                    <div class="flex gap-3">
                        <div class=" bg-slate-700 border border-slate-600 rounded-lg px-2">
                            <span>${timeOrSeasons} min</span>
                        </div>
                        <div class="bg-slate-700 border border-slate-600 rounded-lg px-2">
                            <span>${filmeInfo.productionCountries.join(' - ')}</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-xs font text-slate-500 font-semibold">GENRES</p>
                        <div id="genres" class="flex gap-2">
                        
                        </div>
                    </div>
                    <div>
                        <p class="text-xs font text-slate-500 font-semibold">Réalisateur(s)</p>
                        <p class="text-slate-100">${filmeInfo.directors}</p>
                    </div>
                    <div>
                        <p class="text-xs font text-slate-500 font-semibold">Synopsis</p>
                        <p class="text-slate-100">${filmeInfo.description}</p>
                    </div>
                    <hr>
                    <button class="bg-red-600 flex justify-center rounded-lg p-2 text-slate-50 font-semibold cursor-pointer hover:scale-101"><svg xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" 
                 stroke="currentColor" 
                 class="size-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>Ajoute aux favoris</button>
                </div>
            </div>
            `

            body.appendChild(divModal)
            const genres = document.getElementById('genres')
            const infoGenres = filmeInfo.genres
            
            infoGenres.forEach(element => {
                genres.innerHTML += `<span class="bg-slate-700 border border-slate-600 rounded-lg px-2">${element}</span>`
            })

            const closeModal = document.getElementById('closeModal')
            closeModal.addEventListener('click', (e) => {
                const divModal = document.getElementById('divModal')
                divModal.remove()
            })
        })
    })

}