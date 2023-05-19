import { View, Text, StyleSheet } from "react-native";

export const Error = ({ error }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.errorText}>{error}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 25,
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#fff",
    fontSize: 25,
    textTransform: "capitalize",
    fontStyle: "italic",
  },
});
