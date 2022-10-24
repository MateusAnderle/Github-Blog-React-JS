import React, { createContext, useState } from "react";
import { api } from "../api";

export const DataContext = createContext({});

export function DataContextProvider({children}){
    const [ userData, setUserData ] = useState({});
    const [ userIssue, setUserIssue ] = useState({});
    const [ postData, setPostData ] = useState({});

    async function fetchData(query = ""){
        const responseData = await api.get(`/users/freeCodeCamp`);
        setUserData(responseData.data)

        const responseIssue = await api.get(`search/issues?q=${query ? query : ""}%20repo:freeCodeCamp/freeCodeCamp`); 
        setUserIssue(responseIssue.data)
    }
    //(`/search/issues?q=repo:freeCodeCamp/freeCodeCamp`)

    return (
        <DataContext.Provider 
          value={{ 
            fetchData,
            userData,
            userIssue,
            postData,
            setPostData,
          }}
        >
            {children}
        </DataContext.Provider>
    )
}
