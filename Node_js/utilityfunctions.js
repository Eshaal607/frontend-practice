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