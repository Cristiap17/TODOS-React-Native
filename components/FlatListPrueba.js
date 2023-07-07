import React, { useEffect, useState } from 'react';
import Item from './ItemPrueba';
import ModalPrueba from './modal/ModalPrueba';
import { cacheStorage } from '../utils/localStorage';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';


const FlatListPrueba = () => {

  const [data, setData] = useState([])
  
  useEffect(()=>{},[data])

  useEffect(()=>{
    cacheStorage.getItem('todoList').then(todoList => setData(todoList ?? data))
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatListContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} id={item.id} setData={setData}/>}
        keyExtractor={item => item.id}
      />
      </View>
      <ModalPrueba setData={setData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  flatListContainer:{
    height: '90%',
  }
});

export default FlatListPrueba;