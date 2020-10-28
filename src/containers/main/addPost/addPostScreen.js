import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert} from 'react-native';
import palette from 'res/palette';

export default function addPostScreen() { 
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
<<<<<<< HEAD
  );
}
=======
    <View style={{ marginTop: 80, alignItems: 'center' }}>
      <Text style={styles.titleText}> News Details</Text>
      <TextInput
        placeholder='Enter title of the article'
        style={{ margin: 20 }}
        
      
      />
      <TextInput
        placeholder='Enter description'
        style={{ margin: 20 }}
      
      />
      <Button
        title="Add news"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
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
>>>>>>> 071a66a... fifth
