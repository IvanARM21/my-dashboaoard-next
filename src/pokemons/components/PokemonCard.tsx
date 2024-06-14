
import Link from 'next/link'
import Image from 'next/image'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemons';

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon } : Props) => {

    const { id, name } = pokemon;
    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]);
    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon));
    }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white flex flex-col rounded overflow-hidden shadow-lg">
            <div className="flex flex-col items-center justify-center p-6 bg-gray-800 border-b">
                <Image 
                    key={id}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width={100}
                    height={100}
                    alt={name}
                    priority={false}
                />
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
            <div className="mt-5">
                <Link
                    href={`/dashboard/pokemons/${name}`}
                    className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                >
                    Más Información
                </Link>
            </div>
            </div>
            <div className="border-b">
                <div
                    onClick={onToggle} 
                    className='px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer'>
                        <div className="text-red-600">
                        {isFavorite ? (
                            <IoHeart />
                        ) : (
                            <IoHeartOutline />
                        )}
                        </div>
                        <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800 leading-none">
                            {
                              isFavorite 
                                ? 'Es Favorito' 
                                : 'No es Favorito'
                            }
                        </p>
                        <p className="text-xs text-gray-500">Click para cambiar</p>
                        </div>
                </div>
            </div>

            <div className="">
                <button className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
                    <p className="text-sm font-medium text-gray-800 leading-none"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-4 w-4 text-gray-800 fill-current animate-spin" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"></path></svg> Logout
                            </p>
                </button>
            </div>
        </div>
    </div>
  )
}
