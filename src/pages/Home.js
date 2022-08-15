import { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import { API } from 'aws-amplify';
import { listUserModels } from "../graphql/queries";
import { LoaderWithTheme } from "../components/Loader";
import { useNavigate } from "react-router-dom";
import '../assets/css/HomeStyler.css'

export default function Home () {
    const [globalState, setGlobalState] = useGlobalState();
    const [users, setUsers] = useState(true);
    const [load, setLoad] = useState(true);

    const navigate = useNavigate();

    const getAllUsers = async () => {
        try {
            const apiData = await API.graphql({ query: listUserModels });
            return apiData.data.listUserModels.items;
        }
        catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        setTimeout(async ()=>{
            setLoad(false);
            const allUsers = await getAllUsers();
            console.log(allUsers);
            setUsers(allUsers);
            const userVal = users.find(user => (user.id === globalState.loggedUser.username && !user._deleted));
            if (userVal){
                console.log("This user already exists");
                setGlobalState({
                    ...globalState,
                    username: userVal.username
                })
            }
            else{
                console.log("This is a brand new user");
                navigate(`/welcome`);
            }
        }, 2000);

        // eslint-disable-next-line
      }, [users]);

    if (load){
        return (
            <div className="loader">
                <LoaderWithTheme/> <br/>
            </div>
        )
    }
    return(
        <div>
            <h4>Hello user - {globalState.username}</h4>
            <h4>Cognito ID - {globalState.loggedUser.username} </h4>
            <h4>Email - {globalState.loggedUser.attributes.email} </h4>
        </div>
    )
    
};