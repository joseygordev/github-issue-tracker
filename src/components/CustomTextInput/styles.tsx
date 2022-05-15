import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export default StyleSheet.create({
  wrapper: {
    marginVertical: 12,
    width: (Layout.window.width - (32 + 8 + 32 + 8)) / 2,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 6,
    height: 42,
    paddingRight: 25,
    paddingLeft: 13,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  overlappingWrapper: {
    backgroundColor: Colors.white,
    position: "absolute",
    top: -8,
    left: 0,
    borderRadius: 8,
    paddingHorizontal: 6,
    zIndex: 20,
    marginLeft: 6,
  },
  overlappingText: {
    color: Colors.steel,
    fontSize: 12,
  },
});
