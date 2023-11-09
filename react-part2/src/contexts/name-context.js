import { createContext, useState } from "react";

export const NameContext = createContext("");

export default function NameContextProvider({ children }) {
    const [name, setName] = useState("User");

    const resetName = () => {
        setName("User");
    };

    return (
        <NameContext.Provider value={{ name, setName, resetName }}>
            {children}
        </NameContext.Provider>
    );
}
