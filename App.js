import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, Image} from 'react-native';

import styles from './src/styles/style'
import RecipeRank from './src/components/RecipeRank'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>썸마켓</Text>
 
        <ScrollView>
            <Image source={require('./src/image/mustkit.jpg')} style={styles.ad}>
            </Image>
            <RecipeRank />
            
            <Text style={styles.title}>제철재료</Text>
            <View style={styles.card}></View>

            <Text style={styles.title}>인기 요리사</Text>
            <View style={styles.card}></View>

            <Text style={styles.title}>내맘대로</Text>
            <View style={styles.pick}></View>

        </ScrollView>

    </SafeAreaView>
  );
};


export default App;