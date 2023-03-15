import { StyleSheet,
          FontVariant } from "react-native";

const styles = StyleSheet.create({
  tab:{
    position:"absolute",
    width:"100%",
    height:96,
    top:173,
    backgroundColor:"#376AED",
    borderTopLeftRadius:28,
    borderTopRightRadius:28,
  },
  textTabLeft:{
    position:"absolute",
    width:58,
    height:18,
    left:89,
    fontStyle:"normal",
    fontWeight:"800",
    fontSize:18,
    lineHeight:18,
    textTransform:"uppercase",
    top: 30,
    alignItems:"flex-end",
    color:"#ffffff"
  },
  textTabRight:{
    position:"absolute",
    width:58,
    height:18,
    right:89,
    fontStyle:"normal",
    fontWeight:"800",
    fontSize:18,
    lineHeight:18,
    top: 30,
    color:"#ffffff"
  }
})

export default styles