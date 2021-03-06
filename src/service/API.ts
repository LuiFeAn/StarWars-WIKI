import axios from "axios";

//EndPoints
const films = "https://swapi.dev/api/films/";
const people = "https://swapi.dev/api/people/";
const planets = "https://swapi.dev/api/planets/";
const species = "https://swapi.dev/api/species/";
const starShips = "https://swapi.dev/api/starships/";
const vehicles = "https://swapi.dev/api/vehicles/";

const API = {
    films:async(id?:string)=>{
       
        try{
            if(id){
                let req = await axios.get(`${films}${id}`);
                let json = req.data;
                return json
            }
            else{
                let req = await axios.get(`${films}`);
                let json = req.data;
                return json
            }
        }catch(err){
            alert(err);
        }

    },
    people:async(id?: string)=>{
        try{
            if(id){
                let req = await axios.get(`${people}${id}/`);
                let json = await req.data;
                return json
            }
            else{
                let req = await axios.get(`${people}`);
                let json = await req.data;
                return json
            }
        }catch(err){
            alert(err);
        }
    },
    planets:async(id?: string)=>{
        try{
            if(id){
                let req = await axios.get(`${planets}${id}`);
                let json = await req.data;
                return json;
            }
            else{
                let req = await axios.get(`${planets}`);
                let json = await req.data;
                return json;
            }
        }catch(err){
            alert(err);
        }
    },
    species:async(id?:string)=>{
        let req = await axios.get(`${species}${id}`);
        let json = await req.data;
        return json;
    },
    starShips:async(id?:string)=>{
        let req = await axios.get(`${starShips}${id}`);
        let json = await req.data;
        return json;
    },
    vehicles:async(id?:string)=>{
        let req = await axios.get(`${vehicles}${id}`)
        let json = await req.data;
        return json;
    }


}
export default API;