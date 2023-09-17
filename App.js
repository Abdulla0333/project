import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const options = [
  {id: 1, label: 'Maiduguri'},
  {id: 2, label: 'Lagos'},
  {id: 3, label: 'Ogun'},
  {id: 4, label: 'Abuja'},
  {id: 5, label: '5Ondo'},
];
console.log(options);

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = option => {
    const isSelected = selectedOptions.includes(option.label);
    if (isSelected) {
      setSelectedOptions(
        selectedOptions.filter(label => label !== option.label),
      );
    } else {
      setSelectedOptions([...selectedOptions, option.label]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.sowDropDown}>Show Dropdown</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modal}>
          <FlatList
            data={options}
            keyExtractor={item => {
              return item.id.toString();
            }}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => toggleOption(item)}>
                <Text
                  style={
                    selectedOptions.includes(item.label) &&
                    styles.selectedOption
                  }>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.sowDropDown}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Text style={{...styles.sowDropDown, width: '80%'}}>
        Selected Options: {selectedOptions.join(', ')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedOption: {
    fontWeight: 'bold',
    color: 'black',
  },
  sowDropDown: {
    color: 'black',
  },
});

export default App;
