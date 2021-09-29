import React, { Fragment, useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { charactersService } from '../../services/charactersService/charactersService';
import styles from './Home.module.css';

// const character= 'Bart Simpson';
// const quote = "Nothing you say can upset us. We're the MTV generation.";
// const image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638";

const Home = () => {
    const [characters, setCharacters] = useState([]);
    const getCharacters = async() => setCharacters(await charactersService);
    useEffect(() => getCharacters(), []);
    return(
        <Fragment>
            {/* <h1 className={styles.title}>Simpsons Quotes</h1> */}
            <h1>Simpsons Quotes</h1>
            <div className={styles.generalContainer}>
                {/* <CharacterCard characterName={character} characterQuote={quote}  imageUrl={image}/> */}
                {characters.map((character) => <CharacterCard characterName={character.character} characterQuote={character.quote} imageUrl={character.image} key={`Card-${character.quote}`}/>)}       
            </div>
        </Fragment>
    )}

export default Home;