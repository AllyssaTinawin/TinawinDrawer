import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
      <Image source={{uri: 'https://uploads-ssl.webflow.com/60e4641f1ad2835b44c3c14e/60e4641f1ad28344d9c3c1ac_facebook.svg'}}
       style={styles.image1} />
       <Text style={styles.red}>Allyshoppe</Text>
        <Text style={styles.blue}>just now</Text>
        <Text style={styles.yellow}>Are you looking for OOTD? We gotchu!</Text>
        <Image source={{uri: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d86c0ae455b225e9201b89b4f6253ad0~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1711191600&x-signature=gxg06U2Vwm7uuTZ952yyKEfQL%2FI%3D'}} style={styles.image} />
        <Text style={styles.text2}>Like          Comment           Share</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.red}>La Deuxieme.ph</Text>
        <Text style={styles.blue}>1hr ago</Text>
        <Text style={styles.yellow}>Life Isn't perfect but your outfit can be</Text>
        <Image source={{uri: 'https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-1/299491691_405482715015559_6201383075062218780_n.jpg?stp=dst-jpg_s320x320&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG8w6NSEym91apsIpLX568r7DGBKnkT_V3sMYEqeRP9XaD5FsfMGep_pYcqAwqfjB1wm-BQ0Oy7Hg4MstUmtKd4&_nc_ohc=uA-rmZDtSOQAX_FDbSc&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfBNV6-Vy-pmcYiOb3EAE_Fgo7Wgyp5zloHaM2WNZm7tTQ&oe=6600577C'}} style={styles.image} />
        <Text style={styles.text3}>Like          Comment           Share</Text>
      </View>
      
      <View style={styles.container}>
        <Text style={styles.red}>Angelyssa's Sari </Text>
        <Text style={styles.blue}>min ago</Text>
        <Text style={styles.yellow}>All u need is here! Shop now!</Text>
        <Image source={{uri: 'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/243420764_262409589219962_7588979140947644254_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGeiJgYLT_TOFVjDbOtqHC-o8r2Twx8fAKjyvZPDHx8ArnRblkeVkK7OUyElwPjWetGgtODY9AcBBgzNcOAwW4z&_nc_ohc=o4zJnUg5l-cAX92bg2T&_nc_oc=AdgDuhqDCD5ChTs7S1fsAnSod07K2XcR0qdK5cUJ0SpVOMzZfn3Uzl5TAiwxLEgCh8w&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfCu8tQCq3PXpJXyiCpMOh1AhVM1PkhPNRHMnBUha6y7wg&oe=66006E9E'}} style={styles.image} />
        <Text style={styles.text3}>Like          Comment           Share</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  text2: {
     fontSize: 12,
     fontWeight: 'bold',
  },
  text3: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 20,

 },
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 350,
    marginBottom: 30,
    borderRadius: 5,
  },
  image1: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 330,
    marginBottom: 20,
  },
  red: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 250,
    marginTop: 5,
  },
  blue: {
    marginRight: 343,
    fontSize: 12,
  },
  yellow: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 12,
    paddingLeft: 20,
    textAlign: 'right',
    
  }
});

export default Home;

