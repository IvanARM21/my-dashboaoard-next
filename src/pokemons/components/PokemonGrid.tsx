'use client';

import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[];
}
export const PokemonGrid = ({ pokemons } : Props) => {

  // My solution
  // pokemons = pokemons.length ? pokemons : useAppSelector(state => Object.values(state.pokemons));
  
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        {
            pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))
        }
    </div>
  )
}
