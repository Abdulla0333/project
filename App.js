import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [
  {id: '92iijs7yta', name: 'Ondo'},
  {id: 'a0s0a8ssbsd', name: 'Ogun'},
  {id: '16hbajsabsd', name: 'Calabar'},
  {id: 'nahs75a5sg', name: 'Lagos'},
  {id: '667atsas', name: 'Maiduguri'},
  {id: 'hsyasajs', name: 'Anambra'},
  {id: 'djsjudksjd', name: 'Benue'},
  {id: 'sdhyaysdj', name: 'Kaduna'},
  {id: 'suudydjsjd', name: 'Abuja'},
];

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const multiSelectRef = useRef(null);

  const onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };

  return (
    <View style={{flex: 1, marginHorizontal: 10, backgroundColor: 'white'}}>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        ref={multiSelectRef}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={text => console.log(text)}
        altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#000000"
        tagBorderColor="#000000"
        tagTextColor="#000000"
        selectedItemTextColor="#000000"
        selectedItemIconColor="#000000"
        itemTextColor="#000000"
        displayKey="name"
        searchInputStyle={{color: '#000000'}}
        submitButtonColor="#000000"
        submitButtonText="Submit"
      />
      <View>
        {multiSelectRef.current &&
          multiSelectRef.current.getSelectedItemsExt(selectedItems)}
      </View>
    </View>
  );
};

export default App;
