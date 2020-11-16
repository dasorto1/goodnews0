import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Platform, Image, TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native';
import palette from 'res/palette';
import db from '../../../firebase';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';
import RNFetchBlob from 'rn-fetch-blob'
import auth from '@react-native-firebase/auth';

import { AuthContext } from './../../../AuthProvider';

export default function addPostScreen() { 
 
 
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [image, setImage] = useState(null);
  const [profileImageUrl, setprofileImageUrl] = useState('')

  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  
  const onTitleChange = (title) => setTitle(title)
  const onContentChange = (content) => setContent(content)
 
 
  
  async function getPathForFirebaseStorage (uri) {
    if (Platform.OS==="ios") return uri
    const stat = await RNFetchBlob.fs.stat(uri)
    return stat.path
  }

  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(source);
        setImage(source);
      }
    });
  };
  const uploadImage = async () => {
    
    const { uri } = image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = await getPathForFirebaseStorage(uri)
    setUploading(true);
    setTransferred(0);
    const task = storage()
      .ref(filename)
      .putFile(uploadUri);
    // set progress state
    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
      );
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    setUploading(false);
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to GoodNews!'
    );
    let imageRef = storage().ref('/' + filename);
    imageRef
    .getDownloadURL()
    .then((url) => {
      //from url you can fetched the uploaded image easily
      // this.setState({profileImageUrl: uploadedUrl});
      setprofileImageUrl(url);
    })
    .catch((e) => console.log('getting downloadURL of image error => ', e));
     setImage(null);
  };
  

  const onCreatePost = () => {
    firestore()
    .collection('posts')
    .add({
      title: title,
      content: content,
      image: profileImageUrl
      // image: image,
      // user: user

    })
    .then(() => {
      console.log('Post added!');
    });
    setprofileImageUrl('');
    // let postRef = db.collection('posts')

    // let payload = {title, content}

    // postRef.add(payload)
    // .then(function(doc){
    //     console.log("Document successfully written", doc.id);
    // })
  }

  // const uploadImage = async (uri, name, firebasePath) => {
  //   const imageRef = storage().ref(`${firebasePath}/${name}`)
  //   await imageRef.putFile(uri, { contentType: 'image/jpg'}).catch((error) => { throw error })
  //   const url = await imageRef.getDownloadURL().catch((error) => { throw error });
  //   return url
  // }
  
  // const uploadedUrl = await uploadImage('uri/of/local/image', 'imageName.jpg', 'path/to/remote/folder');
  
  // const {imageName} = this.state;
 

  return (
    <View style={{ flex: 1, flexDirection: 'column',justifyContent:'flex-start' }}>
    <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
        <Text style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {image !== null ? (
          <Image source={{ uri: image.uri }} style={styles.imageBox} />
        ) : null}
        {uploading ? (
          <View style={styles.progressBarContainer}>
            <Progress.Bar progress={transferred} width={300} />
          </View>
        ) : (
          <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
            <Text style={styles.buttonText}>Upload image</Text>
          </TouchableOpacity>
        )}
      </View>

    <View style={{flex:1, alignItems: 'center', flexDirection: 'column',justifyContent:'flex-start'}}>
      <Text style={styles.detailsText}> News Details</Text>
      <TextInput style={styles.newsTitle}
        placeholder='Enter title of the article'
        value={title}
        style={{ margin: 20 }}
        onChangeText={onTitleChange}
        maxLength = {100}
      
      />
      {/* <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    > */}
      <TextInput style={styles.description}
        placeholder='Enter description'
        style={{ margin: 20 }}
        onChangeText={onContentChange}
        value={content}
        maxLength = {120}
      
      />
      {/* </KeyboardAvoidingView> */}
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
  
  detailsText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  newsTitle:{
    
  },
  description:{
    
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'

  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center'
  },
  progressBarContainer: {
    marginTop: 20
  },
  imageBox: {
    width: 300,
    height: 300
  }
});
