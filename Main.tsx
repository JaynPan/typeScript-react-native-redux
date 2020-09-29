import { StatusBar } from 'expo-status-bar';
import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RootStore } from './store';
import { GetPokemon } from './store/actions/PokemonActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main: FC = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('');
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (text: string): void => {
    setPokemonName(text);
  };

  const handleSubmit = (): void => {
    dispatch(GetPokemon(pokemonName));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        style={{
          width: 100,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={(text) => handleChange(text)}
        value={pokemonName}
      />
      <Button onPress={handleSubmit} title="search" />
      {pokemonState.loading && <Text>Loading...</Text>}
      {pokemonState.pokemon && (
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: pokemonState.pokemon.sprites.front_default,
            }}
          />
          {pokemonState.pokemon.abilities.map((ability) => {
            return (
              <Text key={ability?.ability?.name}>{ability.ability.name}</Text>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Main;
