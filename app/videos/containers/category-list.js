import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import Empty from 'app/videos/components/empty';
import Separator from 'app/sections/components/horizontal-separator';
import Category from 'app/videos/components/category';
import Layout from 'app/videos/components/category-list-layout';

class CategoryList extends Component {
  renderEmpty   = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <Separator />
  renderItem    = ({item}) => <Category {...item} />
  keyExtractor  = ({id}) => `${id}`

  render () {
    const { list } = this.props;
    return (
      <View style={{flex: 1, }}>
       <Layout title="Categorías">
        <FlatList
          horizontal
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          data={list}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
       </Layout>
      </View>
    )
  }
}

export default CategoryList;
