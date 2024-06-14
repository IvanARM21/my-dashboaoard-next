import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";
import { PokemonGrid } from "@/pokemons/index";
import { Metadata } from "next";
import { IoHeartOutline } from "react-icons/io5";

export const metadata : Metadata = {
    title: 'Favoritos',
    description: 'Lorem ipsum dolor sit amet'
}

export default async function PokemonsPage() {

    return (
    <div className="flex flex-col">

        <span className="text-5xl font-black text-center my-10">Pokémons Favoritos <small className="text-blue-500 ">Global state</small></span>
        {<FavoritePokemons />}
    </div>
  );
}

