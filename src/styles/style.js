import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    appTitle: {
      width: "100%",
      height: "10%",
      position: 'relative',
    },
    veggie: {
      width: "100%",
      height: "18%",
    },
    card: {
      backgroundColor: '#dedede',
      width: 150,
      height: 180,
      borderRadius: 10, 
      marginLeft: 14,
      marginRight: 10,
      marginBottom: 10
    },
    ad: {
      flex: 1,
      height: 250,
      aspectRatio: 1.7
      //transform: [{scale: 0.9}],
      //resizeMode: 'cover'
    },
    title: {
      color: '#000',
      fontSize: 16,
      marginTop: 30,
      marginLeft: 15,
      marginBottom: 20,
      fontWeight: '700',
      textAlign: 'left'
    },
    button: {
      color: '#000',
      fontSize: 13,
      marginRight: 15,
      fontWeight: '300',
      textAlign: 'right'
    },
    recipeRank: {
      marginLeft: 11,
      marginRight: 20,
      marginBottom: 11,
      height: 47,
      backgroundColor: '#fff',
      borderRadius: 7,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      elevation: 2,
  
    },
    rankTitle: {
      color: '#000',
      fontSize: 16,
      marginTop: 13,
      marginLeft: 13,
      marginBottom: 14,
      fontWeight: '700'
    },
    element: {  
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'


    },
    pick: {
      flex: 1,
      height: 200,
      backgroundColor: '#dedede',
      borderRadius: 10,
      marginLeft: 14,
      marginRight: 20,
      marginBottom: 10
    },
  });
  
  export default styles;