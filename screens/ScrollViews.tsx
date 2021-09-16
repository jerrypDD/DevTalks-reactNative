import * as React from "react";
import { StyleSheet, ScrollView, FlatList, Button, Text, View} from "react-native";
const items = [
  { id: 0, name: "item 0" },
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
  { id: 4, name: "item 4" },
  { id: 5, name: "item 5" },
  { id: 6, name: "item 6" },
  { id: 7, name: "item 7" },
  { id: 8, name: "item 8" },
  { id: 9, name: "item 9" },
  { id: 10, name: "item 10" },
];

const Scroll = () => {
  return (
    <ScrollView style={styles.scrollView}>
      {items.map((item, index) => {
        return (
          <View key={index} style={styles.scrollItem}>
            <Text>{item.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const renderItem = ({ item }: any) => (
  <View key={item.id} style={styles.flatListItem}>
    <Text>{item.name}</Text>
  </View>
);

const FlatListComponent = () => {
  return (
    <FlatList style={styles.FlatList} data={items} renderItem={renderItem} />
  );
};

export default function ScrollViews() {
  const [view, setView] = React.useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScrollViews</Text>
      <View style={{ flexDirection: "row" }}>
        <Button title="scrollView" onPress={() => setView(true)} >
          ScrollView
        </Button>
        <Button title="flatList" onPress={() => setView(false)} color={"#Faa"}>
          FlatList
        </Button>
      </View>
      <View
        style={styles.separator}

      />
      {view ? <Scroll /> : <FlatListComponent />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  scrollView: {
    height: 200,
    width: "100%",
  },
  scrollItem: {
    padding: 20,
    alignItems: "center",
  },
  FlatList: {
    height: 200,
    width: "100%",
    backgroundColor: "#86beec",
  },
  flatListItem: {
    padding: 20,
    alignItems: "center",

    backgroundColor: "#86beec",
  },
});
