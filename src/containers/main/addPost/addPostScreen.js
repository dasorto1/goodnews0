import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert} from 'react-native';
import palette from 'res/palette';
import db from '../../../firebase';
import firestore from '@react-native-firebase/firestore';



export default function addPostScreen() { 
 
 
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const onTitleChange = (event) => setTitle(event.target.value)
  const onContentChange = (event) => setContent(event.target.value)
 
  const onCreatePost = () => {
    firestore()
    .collection('posts')
    .add({
     title: title,
      content: content
    })
    .then(() => {
      console.log('Post added!');
    });
    
    // let postRef = db.collection('posts')

    // let payload = {title, content}

    // postRef.add(payload)
    // .then(function(doc){
    //     console.log("Document successfully written", doc.id);
    // })
  }

  return (
    <View style={{ flex: 1, marginTop: 60 }}>
    <View>
        <Button title = "Add an image of your news article"
          onPress={() => Alert.alert('Button pressed')}
          style={{
            alignItems: 'center',
            padding: 10,
            margin: 30
          }}/>
          
      
    </View>
    <View style={{ marginTop: 80, alignItems: 'center' }}>
      <Text style={styles.titleText}> News Details</Text>
      <TextInput
        placeholder='Enter title of the article'
        value={title}
        style={{ margin: 20 }}
        onChange={onTitleChange}
      
      />
      <TextInput
        placeholder='Enter description'
        style={{ margin: 20 }}
        onChange={onContentChange}
        value={content}
      
      />
      <Button
        title="Add news"
        color="#f194ff"
        onPress={onCreatePost}
      />
      
    </View>

  </View>

  );
}

const styles = StyleSheet.create({
  
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
