import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";

function App() {
    const [counter, setCounter] = useState(11);
    const [person, setPerson] = useState({
        name: "Andrei",
        address: "",
        age: 0,
    });

    function incrementCounter() {
        // setCounter(counter + 1);
        setCounter((previous) => {
            return previous + 1;
        });

        setPerson((previous) => {
            return { ...previous, age: counter + 1 };
        });
    }

    return (
        <div className="App">
            <h2 className="title">
                Acesta este un subtitlu! {person.name} ({person.age})
            </h2>
            <Title counter={counter} name="primary-title">
                Acesta este un titlu <p>Acesta este un paragraf in titlu</p>
                <Card
                    counter={counter}
                    incrementCounterCallback={incrementCounter}
                    title="Titlu card"
                    description="Descriere card"
                />
            </Title>
        </div>
    );
}

export default App;
