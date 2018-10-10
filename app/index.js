import React, { Component } from 'react';
import { Text } from 'react-native';
import Home from 'app/screens/containers/home';
import Header from 'app/sections/components/header';
import SuggestionList from 'app/videos/containers/suggestion-list';

type Props = {};
export default class App extends Component<Props> {
  render () {
    return (
      <Home>
         <Header />
        <Text>buscardor</Text>
        <Text>categorias</Text>
        <Text>sugerencias</Text>
        <SuggestionList />
      </Home>
    )
  }
}

