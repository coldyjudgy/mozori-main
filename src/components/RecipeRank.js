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
        <Text style={styles.rankTitle}>01    제육볶음</Text>
        </View>
        <View style={styles.recipeRank}>
            <Text style={styles.rankTitle}>02    낙지볶음</Text>
        </View>
        <View style={styles.recipeRank}>
            <Text style={styles.rankTitle}>03    단호박죽</Text>
        </View>
        <View style={styles.recipeRank}>
            <Text style={styles.rankTitle}>04    해물파전</Text>
        </View>
        <View style={styles.recipeRank}>
            <Text style={styles.rankTitle}>05    바지락 칼국수</Text>
        </View>
        </>
    );
};

export default RecipeRank
