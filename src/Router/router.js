import Header from "../Templates/Header"
import Error404 from "../Templates/Error404"
import getHash from "./getHash"
import resolveRoutes from "./resolveRoutes"
import routes from "./routes"


const router = async () => {
 
    const header = null || document.getElementById("header")
    const main = null || document.getElementById("main")
    header.innerHTML = await Header()
    let hash = getHash();
    let route = resolveRoutes(hash)
    let render = await routes[route] ? routes[route] : Error404
    main.innerHTML = render()
}

export default router

