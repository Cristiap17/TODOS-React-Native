import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button} from 'react-native';
import { cacheStorage } from '../../utils/localStorage';

const ModalPrueba = ({setData}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newText, setNewText] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event)=>{
    if (newText.trim() !== '') {
        setError(false)
    }
    setNewText(event);
  }

  const handleSubmit = () =>{
    if (newText.trim() === '') {
        setError(true)
        return
    }
    
    setData((prevState)=>{
      const newData = [...prevState,{id: `${Math.random()}`, title: newText}]
      cacheStorage.setItem('todoList', newData)
      return newData
    })
    setModalVisible(!modalVisible)
    setNewText('')
    setError(false)

  }

  const closeModal = () =>{
    setError(false)
    setModalVisible(false)
  }
  

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable>
                <Text 
                    style={styles.buttonModalClose} 
                    onPress={closeModal}
                >
                        ❌
                 </Text>
            </Pressable>
            <Text style={styles.modalText}>Type to do</Text>
            <TextInput 
                style={styles.input}
                onChangeText={handleChange}
            />
            {error && <Text>Este campo no puede estar vacío.</Text>}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleSubmit}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add To Do</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
    position: 'absolute',
    bottom: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonModalClose: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 50,
    height: 70,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'red',
    borderRadius: 8,
    position: 'absolute',
    top: -30,
    left:120,
  },
});

export default ModalPrueba;