import { combineReducers } from 'redux';

import pokemonReducer from './PokemonReducer';
import authReducer from './AuthReducer';

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  auth: authReducer,
});

export default RootReducer;
