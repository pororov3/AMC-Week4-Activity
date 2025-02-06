import { Text, ScrollView, StyleSheet, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

function Activity3() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.title}> To-Do List</Text>
          <View style={styles.cards_container}>
            <Text style={styles.cards}>Breakfast</Text>
            <Text style={styles.cards_content}>kakain</Text>

          </View>
          <View style={styles.cards_container}>
            <Text style={styles.cards}>Breakfast</Text>
            <Text style={styles.cards_content}>kakain</Text>
          </View>
          
          <View style={styles.cards_container}>
            <Text style={styles.cards}>Breakfast</Text>
            <Text style={styles.cards_content}>kakain</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Activity3

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
    marginBottom: "10px",
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