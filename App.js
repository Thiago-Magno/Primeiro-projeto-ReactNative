import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700&family=Outfit:wght@300;400;600&display=swap');
      </style>
      <View style={styles.card}>
        <Image
          source={require("./images/image-equilibrium.jpg")}
          style={styles.nftImg}
        />
        <Text style={styles.title}>Equilibrium #3429</Text>
        <Text style={styles.Txt}>
          Our Equilibrium collection promotes balance and calm.
        </Text>
        <View style={styles.p2}>
          <Image source={require('./images/icon-ethereum.svg')} style={styles.icon}></Image>
          <Text style={styles.eth}> 0.041 ETH</Text>
          <Image source={require('./images/icon-clock.svg')} style={styles.icon}></Image>
          <Text style={[styles.Txt, styles.space]}>3 days left</Text>
        </View>
        <View style={styles.p3}>
          <Image
            source={require("./images/image-avatar.png")}
            style={styles.avatar}
          ></Image>
          <Text style={styles.Txt}>Creation of </Text>
          <Text style={{ color: "hsl(0, 0%, 100%)", fontWeight: "300" }}>
            Jules Wyvern
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(217, 54%, 11%)",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: "60vh",
    width: "17vw",
    backgroundColor: "hsl(216, 50%, 16%)",
    borderRadius: "2.5%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "hsl(0, 0%, 100%)",
    fontWeight: "600",
    marginRight: "4.5rem",
  },
  nftImg: {
    marginTop: "1rem",
    height: "25vh",
    width: "15vw",
    borderRadius: "2.5%",
  },
  Txt: {
    color: "hsl(215, 51%, 70%)",
    fontWeight: "400",
    // marginLeft:'2rem'
  },
  // space:{
  //    justifyContent:'space-around'
  // },
  eth: {
    color: "hsl(178, 100%, 50%)",
    fontWeight: "600",
  },
  p2: {
    
    width: "15rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  p3: {
    width: "15rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    marginRight: "1rem",
    height: "4vh",
    width: "2vw",
    borderRadius: "100%",
    border: "hsl(0, 0%, 100%) solid 1px",
  },
  
  
});
