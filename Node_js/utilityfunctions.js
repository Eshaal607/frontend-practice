export const setutility = (res, statuscode, payload) =>{
    res.setHeader("Content-Type", 'application/json')
    res.statusCode = statuscode
    res.end(JSON.stringify(payload))
}

export const filter = (data , locationtype , locationname) => {
    return data.filter((destination) => {
            return destination[locationtype].toLowerCase() === locationname.toLowerCase()
        })
}

export const getdatabyqueryparams = (data, queryObj) =>{
    const {country, continent, is_open_to_public} = queryObj

    if(continent){
        data = data.filter( destination => 
            destination.continent.toLowerCase() === continent.toLowerCase()
        )
    }
    if(country){
        data = data.filter( destination => 
            destination.country.toLowerCase() === country.toLowerCase()
        )
    }
    if(is_open_to_public){
        data = data.filter( destination => 
            destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
        )
    }

    return data
}