import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Ionicons } from '@expo/vector-icons';
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function LoginWithGoogle() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      '1085782559162-iptlm50738tf28sf6eh35u887q90ju3a.apps.googleusercontent.com',
  });

  const signIn = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token\
      const response = await GoogleSignin.signIn();

      console.log('response', response);

      // Create a Google credential with the token
      if (!response.data?.idToken) {
        return;
      }
      const googleCredential = auth.GoogleAuthProvider.credential(
        response.data?.idToken
      );

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <View>
      <Button
        className='flex flex-row items-center justify-center w-full rounded-md p-3'
        variant={'outline'}
      >
        <Ionicons name='logo-google' size={20} className='mr-2' />
        <Text className='text-black font-medium font-QuickSand'>
          Đăng nhập trở thành Ôm
        </Text>
      </Button>
      {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={signin}
      /> */}
    </View>
  );
}
