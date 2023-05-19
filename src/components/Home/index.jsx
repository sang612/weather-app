import { useState } from "react";
import { Form } from "../Form";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Detail } from "../Detail";
import { Error } from "../Error";
// import { API_KEY } from "react-native-dotenv";
import { Video } from "expo-av";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState("");

  const handleEnter = () => {
    if (inputValue.trim().length == 0) return;
    setInputValue("");
    getWeather();
  };

  const getWeather = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=32cc42dc2636ea7f0b77f412dde4da69&units=metric`
      );
      const json = await response?.json();
      if (json.cod === "404") {
        setError(json.message);
        setData();
        setIsLoading(false);
        return;
      } else {
        setData(json);
        setError("");
        // console.log("findFirstNumber", findFirstNumber(json?.weather[0]?.id));
        let weatherNumber = Math.floor(
          json?.weather[0]?.id /
            Math.pow(10, Math.floor(Math.log10(json?.weather[0]?.id)))
        );
        switch (weatherNumber) {
          case 2:
            setWeather(
              "https://player.vimeo.com/external/480223896.sd.mp4?s=4322c1e7b0c2863237d0ba6bdba8d92c387e1981&profile_id=164&oauth2_token_id=57447761"
            );
            break;
          case 3:
            setWeather(
              "https://player.vimeo.com/external/424984280.sd.mp4?s=543c5189c244ce5ead7ef7aed1e9ecc2349bbb73&profile_id=165&oauth2_token_id=57447761"
            );
            break;
          case 5:
            setWeather(
              "https://joy1.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_014_preview.mp4"
            );
            break;
          case 6:
            setWeather(
              "https://player.vimeo.com/external/412087327.sd.mp4?s=1a63534f6d027abd2b0f05e18164f9fc514401ea&profile_id=164&oauth2_token_id=57447761"
            );
            break;
          case 7:
            setWeather(
              "https://player.vimeo.com/external/488794107.sd.mp4?s=aa318c4533b95197b77d5f0eac366b4a2eb4662b&profile_id=164&oauth2_token_id=57447761"
            );
            break;
          case 8:
            setWeather(
              "https://player.vimeo.com/external/316506213.sd.mp4?s=5cbb4c572719f6e5720468f2fbe231f729a52efc&profile_id=164&oauth2_token_id=57447761"
            );
            break;
          default:
            break;
        }
        if (json?.weather[0]?.id === 800)
          setWeather(
            "https://player.vimeo.com/external/481345092.sd.mp4?s=567e717db30d91c392ba7bfde8bfec8582afebfd&profile_id=164&oauth2_token_id=57447761"
          );

        setIsLoading(false);
      }
    } catch (error) {
      console.log("error", error);
      // setData();
      // setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log("data", data);

  return (
    <View style={styles.view}>
      {data?.main && (
        <Video
          // source={require('../../../assets/vids/atmosphere.mp4')}
          // source={videoAsset}
          // source={{
          //   uri: weather
          // }}
          // source={{
          //   uri: "https://joy1.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_014_preview.mp4",
          // }}
          source={{
            uri: weather,
          }}
          style={styles.backgroundVideo}
          isMuted
          shouldPlay
          isLooping
          resizeMode="cover"
        />
      )}
      <Form
        setInputValue={setInputValue}
        handleEnter={handleEnter}
        inputValue={inputValue}
      />
      {isLoading ? (
        <View style={{ marginTop: 25 }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <>
          {data && <Detail data={data} />}
          {error && <Error error={error} />}
        </>
      )}
    </View>
  );
};

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 15,
    paddingVertical: 100,
    width: "100%",
    backgroundColor: "black",
  },
  backgroundVideo: {
    height: ScreenHeight,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
});
