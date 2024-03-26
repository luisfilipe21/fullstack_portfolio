import { createContext, useState } from "react";

export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {

    const [port, setPort] = useState(true);

    return (
        <ProjectContext.Provider value={{port, setPort}} >
            {children}
        </ProjectContext.Provider>
    )
}