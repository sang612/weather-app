import { View, Text, StyleSheet, Image } from "react-native";

export const Main = ({ data }) => {
  return (
    <View style={styles.view}>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`,
        }}
        style={{ width: 120, height: 120 }}
      />
      <Text style={styles.sub}>{data?.weather[0]?.description}</Text>
      <Text style={styles.temp}>{data?.main?.temp.toFixed()}&#176;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sub: {
    color: "#fff",
    fontSize: 25,
    textTransform: "capitalize",
  },
  temp: {
    color: "#fff",
    fontSize: 75,
  },
});
