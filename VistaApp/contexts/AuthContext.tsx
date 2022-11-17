import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface globalState {
}

const initialState: globalState = {
}

interface AppContextValue {
    state: globalState,
    setState: Dispatch<SetStateAction<globalState>>
}

const appCtxDefaultValue: AppContextValue = {
    state: initialState,
    setState: state => {}
}


export const AppContext = createContext(appCtxDefaultValue);

export default function AuthContextProvider(props: any) {

    const [authState, setAuthState] = useState(initialState);
    
    return (
        // Uses state as context
        <AppContext.Provider value={{state: authState, setState: setAuthState}}>
            {props.children}
        </AppContext.Provider>
    );
}