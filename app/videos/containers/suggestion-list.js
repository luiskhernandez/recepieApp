import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from 'app/videos/components/suggestion-list-layout';
import Empty from 'app/videos/components/empty';
import Separator from 'app/videos/components/vertical-separator';

class SuggestionList extends Component {
  renderEmpty   = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <Separator />

  render () {
    const list = new Array(2).fill(0).map( (i, index) => ( {key: `${index}`, title: ` title ${index}` } ))
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          data={list}
          renderItem={ ({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    )
  }
}

export default SuggestionList;
