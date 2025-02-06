import { Text, ScrollView, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

function Activity3() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}> To-Do List</Text>
            <FlatList
              data={DATA}
              renderItem={({item}) => <>
                <Item title={item.title} />
                <Item todo={item.todo} />
              </>}
              keyExtractor={item => item.id}
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
    todo: "kakain",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    todo: "kakain",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    todo: "kakain",
  },
];

const Item = ({title, todo}) => (
  <TouchableOpacity style={styles.cards_container}>
    <Text style={styles.cards}>{title}</Text>
    <Text style={styles.cards_content}>{todo}</Text>
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
    // marginTop: "10px",
    backgroundColor: "skyblue",
    padding: "5px"
  },
  cards_content:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  }
})