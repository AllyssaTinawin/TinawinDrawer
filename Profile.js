import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

const Profile = () => {
return (
    <View style={styles.container}>
  <Image source={{uri: 'https://media.licdn.com/dms/image/D4E03AQH_ITTwrazJNA/profile-displayphoto-shrink_200_200/0/1684552657269?e=1716422400&v=beta&t=BArplszuo3KD8PFE-1AQnAeMeTOS3RmRD3YSOGRjJc0'}} style={styles.image} />
 <Text style={styles.boldText}> Allyssa Tinawin </Text>
 <Text style={styles.text}>San Lorenzo, Gapan City, N.E.</Text>
 <Text style={styles.text}>0975-631-2400</Text>
 <Text style={styles.text}>Email: tinawinallyssa@gmail.com</Text>
 <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }} />
   
   <Text style={styles.text1}>Objective</Text>
   <Text style={styles.text}>a black cat and at the same time, fragile.</Text>
   <Text style={styles.text1}>Personal Data</Text>
   <Text style={styles.text}>Nickname: Ally</Text>
   <Text style={styles.text}>Birthdate: September 25, 2003</Text>
   <Text style={styles.text}>Civil Status: Single</Text>
   <Text style={styles.text}>Nationality: Filipino</Text>
   <Text style={styles.text}>Sex: Female</Text>
   <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }} />
   <Text style={styles.text1}>Educational Background</Text>
   <Text style={styles.text}>Elem: Gapan East Central School</Text>
   <Text style={styles.text}>JHS: Juan R. Liwag Memorial High School</Text>
   <Text style={styles.text}>SHS: Divina Pastora College</Text>
   <Text style={styles.text}>College: Wesleyan University-Philippines</Text>
</View>
);
};

const styles = StyleSheet.create({
    container: {
       marginTop: 10,
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 5,
    },
    text1: {
      fontWeight: 'bold',
      padding: 15,
      fontSize: 24,
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'left',
        },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        padding: 15,
        marginTop: -30,
    }
});
export default Profile;