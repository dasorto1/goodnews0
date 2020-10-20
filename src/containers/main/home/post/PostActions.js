import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';
import images from 'res/images';

function tapToLike(likeIcon) {
  if (likeIcon % 2 === 0) {
    return images.redHeart;
  } else {
    return images.like;
  }
}
function tapToBookmark(bookmarkIcon) {
  if (bookmarkIcon % 2 === 0) {
    return images.bookmarkWhite;
  } else {
    return images.bookmark;
  }
}

export default function PostActions() {
  const [likeIcon, setLikeIcon] = React.useState(1);
  const [bookmarkIcon, setBookmarkIcon] = React.useState(1);
  return (
    <View style={Styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={() => setLikeIcon(likeIcon + 1)}>
          <Text style={{color: '#ffffff'}}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed Comment')}>
        <Text style={{color: '#ffffff', paddingLeft: 20}}>Comment</Text>
        </TouchableOpacity>
        
      </View>
      
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //paddingStart: 20,
    marginEnd: 15,
    marginTop: 15,
  },
  actionIcons: {
    width: 23,
    height: 23,
    marginStart: 15,
  },
});
