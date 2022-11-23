import {useContext} from "react";
import dispatch from "../store/AppProvider"
import AppContext from "../store/AppContext";


function useStore(){

    const context = useContext(AppContext)
    return [context, dispatch]
}

export default useStore