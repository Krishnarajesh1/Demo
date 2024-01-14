import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  ImageBackground,
} from 'react-native';
import React from 'react';
import style from './Register.Style';
import imageIndex from '../../assets/imageIndex';
import Btn from '../../components/Button/Button';

const Register = () => {
  return (
    <View>
      <ImageBackground source={imageIndex.homeBgImage} style={style.imgSize}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image source={imageIndex.backIcon} style={style.imageSize} />
          <Text style={style.paraText}>Create Account</Text>
          <Image source={imageIndex.notifyIcon} style={style.imageSize} />
          <Image source={imageIndex.deleteIcon} style={style.imageSize} />
        </View>
        <View style={style.primaryContainer}>
          <Text style={style.headText}>Register</Text>
          <View style={style.iconContainer}>
            <Image source={imageIndex.twitIcon} style={style.imageSize} />
            <Image source={imageIndex.dribbleIcon} style={style.imageSize} />
            <Image source={imageIndex.fbIcon} style={style.imageSize} />
          </View>
          <View>
            <Text style={style.paraText}>or be classical</Text>
          </View>
          <View style={[{flexDirection:'row'},style.inputText]}>
            <Image source={imageIndex.userIcon} style={style.imageSize} />
            <TextInput placeholder="First Name..."  />
          </View>
          <View style={[{flexDirection:'row'},style.inputText]}>
            <Image source={imageIndex.textIcon} style={style.imageSize} />
            <TextInput placeholder="Last Name..."  />
          </View>
          <View style={[{flexDirection:'row'},style.inputText]}>
            <Image source={imageIndex.emailIcon} style={style.imageSize} />
            <TextInput placeholder="Your Email"  />
          </View>
          <View>
            <Text style={style.paraText}>
              I agree to the terms and conditions
            </Text>
          </View>
          <Btn />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
