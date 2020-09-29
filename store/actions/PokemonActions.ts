import axios from 'axios';
import { Dispatch } from 'redux';

import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  PokemonDispatchTypes,
} from './PokemonActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchTypes>,
): Promise<void> => {
  try {
    dispatch({
      type: POKEMON_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_FAIL,
    });
  }
};
