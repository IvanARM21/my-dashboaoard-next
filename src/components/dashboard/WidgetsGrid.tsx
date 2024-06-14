'use client';
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget"
import { IoFootball, IoHeartOutline, IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {

    const isCart = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-10 justify-center gap-5">
        <SimpleWidget 
            title={`${isCart}`}
            label="Contador"
            subTitle="Productos Agregados"
            icon={<IoCartOutline className="h-10 w-10"/>}
            href="/dashboard/counter"
        />
        <SimpleWidget 
            title="Pokemon"
            label="Pokemons"
            subTitle="Aquí están tus Pokemones"
            icon={<IoFootball className="h-10 w-10"/>}
            href="/dashboard/pokemons"
        />
        <SimpleWidget 
            title="Favoritos"
            label="Favoritos"
            subTitle="Aquí están tus Pokemones favoritos"
            icon={<IoHeartOutline className="h-10 w-10"/>}
            href="/dashboard/favorites"
        />
    </div>
  )
}
