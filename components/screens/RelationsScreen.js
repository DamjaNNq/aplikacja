import React, {useRef, createRef} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Animated,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddStoryCard from './AddStoryCard';

//const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
//const {width, height} = Dimensions.get('window');
import {storieslist, users} from './fakeApi';
import storyimage from './storyimage';

const CreateStoryComponent = ({x}) => {
  const color = x.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgb(69, 69, 69)', 'rgb(50, 50, 50)'],
    extrapolate: 'clamp',
  });
  return (
    <>
      <Animated.View
        style={[
          styles.createStoryContainer,{
            borderTopRightRadius: x.interpolate({
              inputRange: [0, 100],
              outputRange: [8, 80],
              extrapolate: 'clamp',
            }),
            borderBottomRightRadius: x.interpolate({
              inputRange: [0, 100],
              outputRange: [8, 80],
              extrapolate: 'clamp',
            }),
            backgroundColor:color,
            transform:[
              {
                scaleX: 1
              },
              {
                scaleY: 1
              },
              {
                translateX: 1
              },
            ]
          }
        ]}
      />
      
    
      
    </>
  );
};


const Story = ({content, id}) => {
  return (
    
    <View>
      <Image
        source={{uri: `https://picsum.photos/id/${id * 10}/500/500`}}
        style={styles.imageStory}
        resizeMode="cover"
      />

      <Text style={styles.name}>{content?.name}</Text>
    </View>
  );
};


export const RelationsScreen = ({navigation}) => {
  //const scrollusers = createRef();
  //const x = useRef(new Animated.Value(0)).current;
  const onchangescreen = () => {
    navigation.navigate(storyimage)}
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.usersContainer}>
        
      <AddStoryCard/>
      
      {storieslist}
      
      </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D426D',
    
    
  },
  titleContainer: {
    backgroundColor: '#323232',
    //padding: 12,
  },
  title: {
    //color: '#fff',
    //fontWeight: 'bold',
    //fontSize: 20,
  },
  usersContainer: {
    //display: 'flex',
    flexDirection: 'row',
    
    justifyContent: "center",
    //marginBottom: 30,
    //marginRight: 30,
    //marginLeft: 30,
    
    //alignSelf: 'center',
    flexWrap: 'wrap',
    
    //width: '100%',
    //alignItems: 'flex-end',
  },
  imageStory: {
    height: 200,
    width: 170,
    //backgroundColor: '#ccc',
    //marginLeft: 5,
    //marginBottom: 20,
    borderRadius: 20,
    margin: 10,

  },
  name: {
    color: '#FFF',
    position: 'absolute',
    bottom: 20,
    left: 24,
    fontSize: 12,
    fontWeight: 'bold',
    width: 70,
  },
  createStoryContainer: {
    paddingVertical: 20,
    height: 200,
    width: 170,
    borderRadius: 20,
    position: 'absolute',
    flex: 1,
    margin: 10,
    
    backgroundColor: '#454545'
  },

  plus: {
    backgroundColor: '#3b5998',
    height: 26,
    width: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    position: 'absolute',
    left: 48,
    top: 115,
    borderWidth: 2,
  },
  plusIcon:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    position:'absolute',
    top:-3,
    left:4,
  },
  createStoryTxtContainer: {
   // width: 100,
    //left: 10,
    //position: 'absolute',
    //bottom: 20,
  },
  createStoryTxt: {
    //color: '#FFF',
    //fontSize: 12,
    //fontWeight: 'bold',
    //textAlign: 'center',
  },
});

export default RelationsScreen;
