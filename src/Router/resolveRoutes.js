import routes from "./routes"

const resolveRoutes = (route) =>{

    const keysRoutes = Object.keys(routes)
    if(route.length > 3){
        const valid = keysRoutes.find(ruta => {
            return ruta.slice(1) == `${route}`
        })
        return valid
    }else{
        return '/' 
    }

}

export default resolveRoutes
