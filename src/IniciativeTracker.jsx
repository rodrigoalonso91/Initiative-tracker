import { useState } from "react";

export const IniciativeTracker = () => {

    const [characters, setCharacters] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const initiative = form.initiative.value;
        setCharacters([...characters, { name, initiative }]);
        console.log({ name, initiative })
    };

    return (
        <section>
            <form onSubmit={handleSubmit} >
                <label>
                    Nombre
                    <input type="text" name="name" />
                </label>
                <label>
                    Iniciativa
                    <input type="number" name="initiative" />
                </label>
                <button type="submit">
                    Agregar personajes
                </button>
            </form>
            <div>
                {
                    characters.sort((a, b) => b.initiative - a.initiative).map(character => (
                    <div key={character.name}>
                        {character.name} - {character.initiative}
                    </div>
                    ))
                }
            </div>
        </section>
    )
}
