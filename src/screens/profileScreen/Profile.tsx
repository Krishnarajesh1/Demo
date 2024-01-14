import {
  View,
  Text,
  ImageBackground,
  Image,
  Button,
  FlatList,
} from 'react-native';
import React from 'react';
import style from './Profile.Style';
import imageIndex from '../../assets/imageIndex';
import {imageData} from '../../static/Data';

const Profile = () => {
  return (
    <View>
      <ImageBackground source={imageIndex.profileBgImage} style={style.bgsize}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Image source={imageIndex.backIcon} style={style.iconSize} />
          <Text style={style.headText}>Profile</Text>
          <Image source={imageIndex.notifyIcon} style={style.iconSize} />
          <Image source={imageIndex.deleteIcon} style={style.iconSize} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Image source={imageIndex.profilePic} style={style.profilePicSize} />
          <Text style={style.profileText}>Siri</Text>
          <Text style={style.profileText}>Photographer</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Text style={style.profileSecText}>2k</Text>
            <Text style={style.profileSecText}>Friends</Text>
          </View>
          <View>
            <Text style={style.profileSecText}>26</Text>
            <Text style={style.profileSecText}>Comments</Text>
          </View>
          <View>
            <Text style={style.profileSecText}>48</Text>
            <Text style={style.profileSecText}>Bookmarks</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button title="Follow" color="#e36414" />
          <Image source={imageIndex.twitBwIcon} style={style.iconSize} />
          <Image source={imageIndex.pinIcon} style={style.iconSize} />
        </View>
        <View>
          <Text style={style.secText}>About me</Text>
          <Text style={style.profileParaText}>
            It is more important to click with people than to click the
            shutter.” “Taking pictures is like tiptoeing into the kitchen late
            at night and stealing Oreo cookies.” “If your pictures aren't good
            enough, you're not close enough
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text style={style.profileParaText}>Album</Text>
          <Text style={style.profileParaText}>View All</Text>
        </View>
        <View>
          <FlatList
            data={imageData}
            renderItem={({item}) => {
              <View>
                <Image source={{uri:item.imageUrl}} style={{height:100,width:100}}/>
              </View>;
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;
