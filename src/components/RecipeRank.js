import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/style'

const RecipeRank = () => {
    return (
        <>
        <View style={styles.element}>
        <Text style={styles.title}>인기 레시피</Text>
        <Text style={styles.button}>더보기</Text>
        </View>

        <View style={styles.recipeRank}>
        <Text style={styles.rankTitle}>01</Text>
        </View>
        <View style={styles.recipeRank}>
            <Text style={styles.rankTitle}>02</Text>
        </View>
        <View style={styles.recipeRank}>
            <Text style={styles.rankTitle}>03</Text>
        </View>
        <View style={styles.recipeRank}>
            <Text style={styles.rankTitle}>04</Text>
        </View>
        <View style={styles.recipeRank}>
            <Text style={styles.rankTitle}>05</Text>
        </View>
        </>
    );
};

export default RecipeRank
