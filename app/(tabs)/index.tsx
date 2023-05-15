import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Text, View } from "../../components/Themed";
import { Modal } from "../../components/Modal";

export default function TabOneScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      enabled
      keyboardVerticalOffset={100}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={{ padding: 25 }}>
          <Text style={styles.title}>Keyboard Avoiding View</Text>
          <Text style={{ paddingTop: 20, paddingBottom: 10 }}>Verdict:</Text>
          <Text>A great option, and definitely one to start with.</Text>
          <Text style={{ paddingBottom: 10 }}>
            The api documentation is fairly useless, but this component actually
            works (much to manys surprise I'm sure)
          </Text>
          <Text>
            Further, the bottom sheet package has some built-in handling, which
            works pretty well (slightly imperfect on Android at times), but
            design can help mitigate this if needed.
          </Text>
          <Text style={{ paddingTop: 20 }}>
            Summary: Design also plays a very important role here with keyboard
            interactions, which I think can be overlooked at times. I think
            being sensitive to keyboard inputs on mobile and raising concerns
            sooner than later is key here, esp. considering small device sizes,
            bumped up font scaling etc.
          </Text>
        </View>
        <Modal />

        {[...Array(20)].map((_, i) => (
          <View
            key={i}
            style={{
              height: 100,
              backgroundColor: i % 2 === 0 ? "honeydew" : "ivory",
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
    </KeyboardAvoidingView>
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
});
