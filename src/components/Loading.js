import {
    View,
    Text,
    Dimensions,
    ActivityIndicator,
    StatusBar,
  } from "react-native";
  import React from "react";
  import { useSelector } from "react-redux";
  
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  
  const Loading = () => {
    const { showLoading } = useSelector((state) => state);
    return showLoading ? (
      <View
        style={{
          backgroundColor: "#4a4768",
          opacity: 0.9,
          marginTop: StatusBar.currentHeight,
          height: height,
          width: width,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <ActivityIndicator size={"large"} color={"white"} />
      </View>
    ) : null;
  };
  
  export default Loading;