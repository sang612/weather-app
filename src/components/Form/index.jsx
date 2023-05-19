import { TextInput, StyleSheet } from "react-native";

export const Form = ({ setInputValue, handleEnter, inputValue }) => {
  return (
    <TextInput
      onChangeText={(newText) => setInputValue(newText)}
      onSubmitEditing={handleEnter}
      value={inputValue}
      style={styles.input}
      placeholder="Enter name..."
      placeholderTextColor="gray"
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: "center",
    marginHorizontal: "auto",
    height: 40,
    width: "50%",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    color: "#fff",
  },
});
