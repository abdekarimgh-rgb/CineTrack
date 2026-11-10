export async function getApi(){
    try{
        const response = await fetch("https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json")

        if(!response.ok){
            throw new Error('Error data')
        }
        const data = await response.json()
        console.log(data)

        return data

    } catch(error){
        console.log(error.message)
        
    }
}