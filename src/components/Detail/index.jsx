import { View, Text, StyleSheet, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Main } from "./Main";
import { DetailTemp } from "./Detail";
import { useRef, useState } from "react";

export const Detail = ({ data }) => {
  _renderItem = ({ item, index }) => {
    if (index === 0) {
      return <Main data={data} />;
    } else if (index === 1) {
      return <DetailTemp data={data} />;
    }
  };
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.title}>
          {data?.name},{data?.sys?.country}
        </Text>
      </View>
      <Carousel
        ref={isCarousel}
        data={[0, 1]}
        renderItem={this._renderItem}
        sliderWidth={300}
        itemWidth={300}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={2}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 12,
          height: 12,
          borderRadius: 999,
          marginHorizontal: 0,
          backgroundColor: "#fff",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
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
  title: {
    fontWeight: "bold",
    fontSize: 45,
    color: "#fff",
  },
});
