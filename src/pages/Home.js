import { useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";

export default function Home () {
    const [globalState] = useGlobalState();

    useEffect( ()=> {
        
        // find if the user already exists
        // if they do then redirect them to the dashboard
        // if not use assign a username here
    })
    return (
        <h1>
            Home page for user 
        </h1>
    )
};