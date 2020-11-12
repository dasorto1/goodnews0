import React, {useContext, useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import Post from './post/Post';
import colors from '../../../res/colors';
import {Text} from 'react-native';
import {Image} from 'react-native';
import images from 'res/images';
import StoryContainer from './story/StoryContainer';
import Global from '../../../Global';
import firestore from '@react-native-firebase/firestore';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export default function homeScreen({navigation}) {
  
  // cosntructor(props){
  //   super(props);
  //   this.state = {
  //     sentimentScore: null,
  //     generalSentiment: null
  //   };
  //   this.findSentiment = this.findSentiment.bind(this);
  // }

  // function findSentiment(title){
  //   const result = sentiment.analyze(title)
  //   return result.score;
    
  //   if (result.score < 0){
  //     this.setState({
  //       generalSentiment: 'Negative'
  //     })
  //   }else if (result.score > 0){
  //     this.setState({
  //       generalSentiment: 'Positive'
  //     })
  //   } else {
  //     this.setState({
  //       generalSentiment: 'Mixed'
  //     })
  //   }
  //  }
  // const data = [
  //   {key: '1'},
  //   {key: '2'},
  //   {key: '3'},
  //   {key: '4'},
  //   {key: '5'},
  //   {key: '6'},
  //   {key: '7'},
  //   {key: '8'},
  //   {key: '9'},
  //   {key: '10'},
  // ];

  // const storyOnPress = () => navigation.navigate('StoryScreen');

  const [posts, setPosts] = useState('')
  // const [content, setContent] = useState('')

  useEffect(() => {
    const list = []
    firestore()
    .collection('posts')
    // Filter results
    
    .get()
    .then(querySnapshot => {
      /* ... */
      querySnapshot.forEach((document) => {
        list.push(document.data()) //call function list 
      })
      setPosts(list)
    })
  }, []);

  
  // const stories = [
  //   {
  //     key: 'JohnDoe',
  //     hasStory: true,
  //     src: 'https://picsum.photos/600',
  //   },
  //   {
  //     key: 'CarlaCoe',
  //     hasStory: true,
  //     src: 'https://picsum.photos/600',
  //   },
  //   {
  //     key: 'DonnaDoe',
  //     hasStory: true,
  //     src: 'https://picsum.photos/600',
  //   },
  //   {
  //     key: 'JuanDoe',
  //     hasStory: true,
  //     src: 'https://picsum.photos/600',
  //   },
  //   {
  //     key: 'MartaMoe',
  //     hasStory: true,
  //     src: 'https://picsum.photos/600',
  //   },
  //   {
  //     key: 'PaulaPoe',
  //     hasStory: true,
  //     src: 'https://picsum.photos/600',
  //   },
  // ];

  return (
    <FlatList
      style={{backgroundColor: colors.background}}
      data={posts}
      
      renderItem={({item, index}) => (
        /*<View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={images.harun}
            style={{height: 512, width: 512, resizeMode: 'contain'}}
          />
        </View>
        */
        <Post post={item} />
      )}
    />
  );
}
