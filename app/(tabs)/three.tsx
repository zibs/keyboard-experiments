import { ScrollView, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import { NoHandlingModal } from "../../components/NoHandlingModal";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={{ padding: 25 }}>
          <Text style={{ paddingTop: 20, paddingBottom: 10 }}>No Handling</Text>
          <Text>
            Nothing works on either platform, just as an example of how poor the
            default experience is.
          </Text>
        </View>
        <NoHandlingModal />
        {[...Array(20)].map((_, i) => (
          <View
            key={i}
            style={{
              height: 100,
              backgroundColor: i % 2 === 0 ? "azure" : "floralwhite",
            }}
          >
            <Text>Input</Text>
            <TextInput
              style={{
                height: 50,
                borderRadius: 10,
                padding: 10,
                margin: 10,
                backgroundColor: "lightgrey",
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
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
});
