import { useContext } from "react";
import { NameContext } from "../contexts/name-context";

export default function Name() {
    const { name, setName } = useContext(NameContext);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(data) => {
                    setName(data.target.value);
                }}
            ></input>
        </div>
    );
}
