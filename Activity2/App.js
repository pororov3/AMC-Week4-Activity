import { Text, View, StyleSheet } from 'react-native';

function Activity1() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Mike Lester <Text style={styles.surname}>Pialago</Text></Text>
    </View>
  );
}

export default Activity1

const styles = StyleSheet.create({
  name:{
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  surname:{
    fontStyle: "italic",
    fontWeight: "normal"
  },
  container:{
    width: "90%",
    height: "20%",
    border: "10px solid",
    borderRadius: "10px",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
  }
})