import React from 'react';
import {Image, StyleSheet, Dimensions, Text} from 'react-native';

export default function PostImage({post}) {
  if (post.image == null || typeof post.image == 'undefined'){
    return <Text style={{color:'white'}}>null image</Text>
  } 
  console.log(post.image, "test")
  return <Image source={{uri: post.image}} style={Styles.postImg} />;
}

const Styles = StyleSheet.create({
  postImg: {
    height: Dimensions.get('screen').height / 3,
    width: Dimensions.get('screen').width,
   
  },
});
