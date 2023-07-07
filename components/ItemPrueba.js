import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import Timer from "./timer/Timer";
import { cacheStorage } from "../utils/localStorage";

  const Item = ({title, id, setData}) => {

    const openModalItem = ()=>{
      Alert.alert(title)
    }

    const closeModal = async (id)=>{
      const todoListStorage = await cacheStorage.getItem('todoList')
      const newTodoList = todoListStorage.filter((todo)=> todo.id !== id)
      await cacheStorage.setItem('todoList', newTodoList)
      setData(newTodoList)
    }

    return(
      <View style={styles.item}>
        <Pressable onPress={openModalItem}>
          <Text style={styles.deleteTodo} onPress={()=>closeModal(id)}>
          ❌
          </Text>
          <Text style={styles.title}>{title}</Text>
          <Timer title={title}/>
        </Pressable>
      </View>
  )};

  const styles = StyleSheet.create({
    item: {
      borderWidth:1,
      borderRadius: 8,
      borderColor: '9BABB8',
      backgroundColor: '#FFF4F4',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    deleteTodo:{
      fontSize: 20,
      position: 'absolute',
      right: -10,
      top: -15,
    }
  });

  export default Item;