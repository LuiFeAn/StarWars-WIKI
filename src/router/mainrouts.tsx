import { useRoutes } from "react-router-dom";

//Páginas
import Home from "../pages/home";
import Films from "../pages/films";
import People from "../pages/people";
import PeopleInfo from "../pages/peopleinfo";
import Planets from "../pages/planets";
import PlanetInfo from "../pages/planetinfo";

const Routes = ()=>{
    return useRoutes([
        {path:"/",element:<Home/>},
        {path:"/films/",element:<Films/>},
        {path:"/people/",element:<People/>},
        {path:"/people/:id",element:<PeopleInfo/>},
        {path:"/planets/",element:<Planets/>},
        {path:"/planets/:id",element:<PlanetInfo/>},
        {path:"/star-ships/:id"},
        {path:"/vehicles/:id"},
    ])
}
export default Routes;