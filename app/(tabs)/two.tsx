import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import KeyboardAwareScrollView from "../../components/KeyboardScrollView";
import { KeyboardAwareModal } from "../../components/KeyboardAwareModal";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={{ padding: 25 }}>
          <Text style={styles.title}>Keyboard Controller Library</Text>
          <Text style={{ paddingTop: 20, paddingBottom: 10 }}>Verdict:</Text>
          <Text style={{ paddingBottom: 10 }}>
            A great option, *if* the application requires significant keyboard
            interactions, or you want an extra level of design polish and
            control.
          </Text>
          <Text style={{ paddingBottom: 10 }}>
            This is the smoothest option, but it does require a 3rd party
            library, and even copying some example code. They don't ship this
            solution as a library primitive, interestingly.
          </Text>
          <Text style={{ paddingBottom: 10 }}>
            This bottom sheet example here does not use its own primitives as an
            experiment, and so doesn't work quite as good as what is built into
            the bottom sheet library. I would recommend instead if in a bottom
            sheet, use the primitives provided or rework the designs.
          </Text>
          <Text style={{ paddingTop: 20 }}>
            Summary: If the application requires some serious keyboard
            interaction, this is probably the better option. Inside bottom
            sheets, continue to use the bottom sheets primitives, or smartly
            design the app in a way that allows the handling to continue to be
            smooth.
          </Text>
        </View>
        <KeyboardAwareModal />

        {[...Array(20)].map((_, i) => (
          <View
            key={i}
            style={{
              height: 100,
              backgroundColor: i % 2 === 0 ? "seashell" : "lavender",
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
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
