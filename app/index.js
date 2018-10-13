import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Home from 'app/screens/containers/home';
import Header from 'app/sections/components/header';
import SuggestionList from 'app/videos/containers/suggestion-list';
import CategoryList from 'app/videos/containers/category-list';
import Loader from 'app/screens/components/loader';
import API from 'app/utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
    loading: true,
  }
  async componentDidMount () {
    const movies     = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log('movies', movies);
    console.log('categories', categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
      loading: false})
  }
  render () {
    return (
      <Home>
        <Header />
        <Text>buscardor</Text>
        {this.state.loading ? (<Loader />) : (
          <View style={{flex: 1, flexDirection: 'column'}}>
            <CategoryList list={this.state.categoryList} />
            <SuggestionList list={this.state.suggestionList} />
          </View>
        ) }
      </Home>
    )
  }
}

