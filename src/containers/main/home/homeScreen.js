import React, {useContext, useState, useEffect} from 'react';
import {RefreshControl, FlatList, View, ToastAndroid} from 'react-native';
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
  
  const [posts, setPosts] = React.useState([])
  // let oldCount = posts.length;
  // this.state = {
  //   sentimentScore: null,
  //   generalSentiment:null
  // };
  // this.findSentiment = this.findSentiment.bind(this);

  // this.findSentiment(event){
  //   const result = sentiment.analyze(event.target.value)
  // }
  function update(){
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
      console.log(posts[0])
    })
  }

  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState(posts);
  
  const onRefresh = React.useCallback(async () => {
    const newPosts = [...posts];
    setRefreshing(true);
    console.log(posts, posts.length, "test")
    // if (posts.length < 10) {
      // console.log(oldCount, "test2", posts.length)
      try {
        update()
        // let response = await fetch(
        //  posts
        // );
        // let responseJson = await response.json();
        // console.log(responseJson);
        // setPosts(responseJson.result.concat(newPosts));
        setRefreshing(false)
      } catch (error) {
        console.error(error);
      }
    // }
    // else{
    //   ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
    //   setRefreshing(false)
    // }
  }, [refreshing]);
  
  // cosntructor(props){
  //   super(props);
  //   this.state = {
  //     sentimentScore: null,
  //     generalSentiment: null
  //   };
  //   this.findSentiment = this.findSentiment.bind(this);
  // }

  // function findSentiment(content){
  //   const result = sentiment.analyze(content)
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

  

  // const [content, setContent] = useState('')
  
  useEffect(() => {
    update()
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

  //if post.content is positive, display in this flatlist post
  
  //how to pass this.findSentiment to post.content and check that
  // function checkSentiment(post.content){
  //   this.findSentiment
  // }
  // if (checkSentiment > 0) { //good news is displayed
  //   return post
  // } //else {
    // do not show post
  //}

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
    keyExtractor={(item, index) => index.toString()}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
  />
);
}
