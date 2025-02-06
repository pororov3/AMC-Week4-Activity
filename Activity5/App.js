import {useState} from "react"; 
import { Text, ScrollView, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

function Activity3() {
  
  const [selectedItem, setSelectedItem] = useState();
  const bgColor = Item.id === selectedItem ? "white" : "darkblue";
  const txtColor = Item.id === selectedItem ? "white" : "black";

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}> To-Do List</Text>
            <FlatList style={{backgroundColor:bgColor}}
              data={DATA}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}
              extraData={item => item.selectedItem}
            />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Activity3

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Breakfast',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title, bgColor, txtColor}) => (
  <TouchableOpacity onPress={setSelectedItem(item.id)} style={[styles.cards_container, {bgColor}]}>
    <Text style={styles.cards}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  title:{
    display: "flex",
    fontWeight: "bold",
    fontSize: "1.5rem",
    width: "100%",
    height: "50px",
    border: "5px solid",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    backgroundColor: "skyblue",
  },
  cards_container:{
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
  cards:{
    display: "flex",
    border: "1px solid",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    backgroundColor: "skyblue",
    padding: "5px"
  },
  // textColor:{
  //   textColor: "white",
  //   backgroundColor: "darkblue",
  // },
  // cards_content:{
  //   alignSelf: "center",
  //   justifyContent: "center",
  //   margin: "20px",
  //   border: "1px solid",
  //   borderRadius: "10px",
  // }
})