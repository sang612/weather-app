import { View, Text, StyleSheet, Image } from "react-native";

export const DetailTemp = ({ data }) => {
  return (
    <View style={styles.view}>
      {/* <Text style={styles.sub}>{data?.weather[0]?.description}</Text>
      <Text style={styles.temp}>{data?.main?.temp}&#176;</Text> */}
      <View style={styles.row}>
        <Text style={styles.sub}>Wind</Text>
        <Text style={styles.unit}> {data?.wind?.speed} m/s</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sub}>Humidity</Text>
        <Text style={styles.unit}> {data?.main?.humidity}%</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sub}>Feels like</Text>
        <Text style={styles.sub}> {data?.main?.feels_like.toFixed()}&#176;</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sub}>Temp Min</Text>
        <Text style={styles.sub}>{data?.main?.temp_min.toFixed()}&#176;</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sub}>Temp Max</Text>
        <Text style={styles.sub}>{data?.main?.temp_max.toFixed()}&#176;</Text>
      </View>
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
    marginVertical: 35,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 8,
  },
  sub: {
    color: "#fff",
    fontSize: 25,
    textTransform: "capitalize",
  },
  unit: {
    color: "#fff",
    fontSize: 25,
  },
});
