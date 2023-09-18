import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { styles } from "./src/style/Styles.js";

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={[styles.head, { backgroundColor: '#f5f6fa' }]}>
        <Image source={{ uri: 'https://img.icons8.com/?size=1x&id=59832&format=png' }} style ={styles.menu} />
        <Text style={styles.headtexts}>Search your notes</Text>
        <Image source={{ uri: 'https://img.icons8.com/?size=1x&id=MaC75ir4ulrF&format=png' }} style ={styles.menurow} />
        <Image source={{ uri: 'https://scontent.fmnl26-2.fna.fbcdn.net/v/t39.30808-6/365421543_6300913236687851_319333846315865620_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFnjHKyF80VkPoa4qfrHLnkoX6TFv-ggs2hfpMW_6CCzRYh-hGVGIX5vMardT-8riAjNAtJlR5uQFhOAxh2CKt_&_nc_ohc=4uVbgJoy9oAAX83Ivv2&_nc_zt=23&_nc_ht=scontent.fmnl26-2.fna&oh=00_AfBFRmnx5dYYvq0x-UcJxAcW0iZBoS905WPZXoX1e86Xyg&oe=650212EC' }} style ={styles.pp} /> 
      </View>

      <View style={styles.boxone}>
        <Text style={styles.titles}>Song List for Videoki</Text>
        <Text style={styles.p}>I live my life for you</Text>
        <Text style={styles.p}>Modelong Charing</Text>
        <Text style={styles.p}>Banyo Queen</Text>
        <Text style={styles.p}>Muli</Text>
        <Text style={styles.p}>Perfect</Text>
        <Text style={styles.p}>The day you said Goodnight</Text>
        <Text style={styles.p}>Mula sa puso</Text>
        <Text style={styles.p}>Muling ibalik</Text>
        <Text style={styles.p}>Ligaya</Text>
        <Text style={styles.p}>Magdalena</Text>
        <Text style={styles.p}>When i met you</Text>
        <Text style={styles.p}>The Past</Text>
        <Text style={styles.p}>Larawang Kupas</Text>
        <Text style={styles.p}>Wait for Me</Text>
        <Text style={styles.p}>Knife</Text>
        <Text style={styles.p}>Hotel California</Text>
      </View>

      <View style={styles.boxtwo} >
        <Text style={styles.titles}>Movies / Tv Series</Text>
        <Text style={styles.p}>- Breaking Bad Season 1</Text>
        <Text style={styles.p}>- The Flash 2023</Text>
        <Text style={styles.p}>- Avengers End Game</Text>
        <Text style={styles.p}>- Barbie</Text>
        <Text style={styles.p}>- Little Mermaid 2023</Text>
        <Text style={styles.p}>- The Meg 2</Text>

      </View>

      <View style={styles.boxthree} >
        <Text style={styles.titles}>Anime List</Text>
        <Text style={styles.p}>Dr. Stone Season 3</Text>
        <Text style={styles.p}>Jujutsu Kaizen Movie</Text>
        <Text style={styles.p}>Fire Force Season 3</Text>
        <Text style={styles.p}>Noblesse</Text>
        <Text style={styles.p}>Hero Academia</Text>
        <Text style={styles.p}>Bleach</Text>
      </View>

      <View style={styles.boxfour} >
      <Text style={styles.titles}>My Thesis Titles</Text>
        <Text style={styles.p}>1. "Revamping the classic space impact game to a 
              modern version for Android: A Game Design Context"</Text>
        <Text style={styles.p}>2. "Designing Social features for collaborative play in 
              space impact games on Android: Implementing and engaging experience"</Text>
      </View>

      <View style={[styles.options, { backgroundColor: '#f5f6fa' }]}>
        <Image source={{ uri: 'https://img.icons8.com/?size=1x&id=83319&format=png' }} style ={styles.imgs} />
        <Image source={{ uri: 'https://img.icons8.com/?size=1x&id=98536&format=png' }} style ={styles.imgs} />
        <Image source={{ uri: 'https://img.icons8.com/?size=1x&id=85775&format=png' }} style ={styles.imgs} />
        <Image source={{ uri: 'https://img.icons8.com/?size=1x&id=112856&format=png' }} style ={styles.imgs} />
      </View>

    </View>
  );
};
