import http from 'node:http'
import { getDataFromDB } from './db.js'
import { error } from 'node:console'
import { setutility,filter } from './utilityfunctions.js'
const PORT = 3000


const server = http.createServer(async(req,res) => {
    const destination = await getDataFromDB()

    if(req.url === '/api' && req.method === 'GET'){
        setutility(res, 200, destination)
    }
    else if(req.url.startsWith('/api/continent') && req.method === 'GET'){
        let continent = req.url.split('/').pop()
        const filterdata = filter(destination , 'continent' , continent)
        setutility(res, 200, filterdata)
        console.log(continent)
    }
    else if(req.url.startsWith('/api/country') && req.method === 'GET'){
        let country = req.url.split('/').pop()
        const filterdata = filter(destination , 'country' , country)
        setutility(res, 200, filterdata)
    }
    else{
        setutility(res, 200, ({
            error: "not found",
            message: "The request route does not exist"
        }))
    }

})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))