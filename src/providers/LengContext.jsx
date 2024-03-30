import { createContext, useState } from "react";
import { projects } from "../data/projects";

export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {

    const [port, setPort] = useState(true);
    const [project, setProject] = useState([]);
    const [modal, setModal] = useState(false);
    const [capturedProjectId, setCapturedProjectId] = useState([]);

    const getProjects = () => {
        setProject(projects)
    }

    const capturedId = (teste) => {
        setCapturedProjectId(teste)
        localStorage.setItem("pojectName", JSON.stringify(teste));
    }

    return (
        <ProjectContext.Provider value={{ port, setPort, capturedId, getProjects, modal, setModal, project, capturedProjectId, setCapturedProjectId }} >
            {children}
        </ProjectContext.Provider>
    )
}