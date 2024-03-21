import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Sample settings data
const settingsData = [
{ id: "1", title: "Account", icon: "person-outline" },
{ id: "2", title: "Notifications", icon: "notifications-outline" },
{ id: "3", title: "Privacy", icon: "lock-closed-outline" },
{ id: "4", title: "Security", icon: "shield-checkmark-outline" },
{ id: "5", title: "Help", icon: "help-circle-outline" },
{ id: "6", title: "About", icon: "information-circle-outline" },
{ id: "7", title: "Logout", icon: "log-out-outline" },
];

const Settings = () => {
const renderItem = ({ item }) => (+
<View style={styles.itemContainer}>
<Ionicons name={item.icon} size={24} color="#333" style={styles.icon} />
<Text style={styles.itemTitle}>{item.title}</Text>
<Ionicons name="chevron-forward-outline" size={24} color="#333" />
</View>
);

return (
<FlatList
data={settingsData}
renderItem={renderItem}
keyExtractor={(item) => item.id}
style={styles.container}
/>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
},
itemContainer: {
flexDirection: "row",
alignItems: "center",
paddingVertical: 12,
paddingHorizontal: 16,
borderBottomWidth: 1,
borderBottomColor: "#ddd",
},
icon: {
marginRight: 16,
},
itemTitle: {
flex: 1,
fontSize: 16,
color: "#333",
},
});

export default Settings;