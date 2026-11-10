export async function getApi() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json")

        if (!response.ok) {
            throw new Error('Error data')
        }
        const data = await response.json()
        console.log(data)

        return data

    } catch (error) {
        console.log(error.message)
        const body = document.querySelector('body')
        const message = document.createElement('div')
        message.className = 'fixed inset-0 flex items-center justify-center z-50'
        message.innerHTML = `<div class="flex flex-col justify-around bg-slate-300 text-slate-950 rounded-xl h-40 w-90 text-center ">
                <h3 class="text-3xl font-semibold">Erreur de chargement</h3>
                <p>Impossible de charger les films et séries. Veuillez réessayer.</p>
                <button class="bg-red-700 w-20 rounded-sm p-1 mx-auto">Fermer</button>
            </div>`

        body.appendChild(message)
    }
}