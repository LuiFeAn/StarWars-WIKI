import { useRoutes } from "react-router-dom";

//Páginas
import Home from "../pages/home";

const Routes = ()=>{
    return useRoutes([
        {path:"/",element:<Home/>},
        {path:"/filmes/:id"},
        {path:"/people/:id"},
        {path:"/planets/:id"},
        {path:"/species/:id"},
        {path:"/star-ships/:id"},
        {path:"/vehicles/:id"},
    ])
}
export default Routes;