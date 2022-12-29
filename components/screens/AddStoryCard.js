import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
	<View style={styles.imageContainer}>
	<TouchableOpacity style={styles.innerContainer} onPress={pickImage}>
	<Image  					
						style={styles.image}
						
						source={{
							uri: "https://picsum.photos/id/189/200/300",
						}}
					/>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
	  <View style={styles.iconContainer}>
	  <Icon name="plus" size={50} color="white" style={styles.iconContainer} />
					
	</View>
    
	</TouchableOpacity>
	</View>
  );
}
	
const styles = StyleSheet.create({
	mainContainer: {
		//paddingBottom: 10
	},

	centerContent: {
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: 100,
	},
	innerContainer: {
		padding: 10,
		//paddingRight: 20,
		//paddingLeft: 10,
		//flexDirection: 'row',
		//justifyContent: "center",
	},
	imageContainer: {
		//marginRight: 15,
		//overflow: 'hidden',
		//paddingVertical: 10,
		//height:230,
		//width:180
	},
	image: {
		height: 230,
		width: 180,
		borderRadius: 25
		
	},
	
	iconContainer: {
		position: 'absolute',
		padding: 80,
		marginVertical: 10,
	},
	
	textContainer: {
		//justifyContent: 'center'
	},
	text: {
		//color: theme.colors.primary,
		//fontSize: theme.fontSize.title,
		//fontWeight: 'normal'
	}
});