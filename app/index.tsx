import { View, Text, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation, useRouter } from 'expo-router';
import LoginWithGoogle from '~/components/authen/loginWithGoogle';

export default function index() {
  const router = useRouter();
  return (
    <LinearGradient colors={['#FFF2D5', '#e3cbff']}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className='h-full w-full flex items-center justify-center '>
        <Card className='w-full max-w-sm'>
          <CardHeader>
            <Image
              className='w-full h-96 object-center object-fill'
              source={require('~/assets/images/login.png')}
            />
            <CardTitle className='mt-10 text-4xl'>F Journey</CardTitle>
            <CardDescription className='mt-3'>
              Mai lại cho bạn những trải nghiệp tuyệt vời cho mọi chuyến đi
            </CardDescription>
          </CardHeader>
          <CardContent className='flex items-center justify-center p-4 rounded-md'>
            <View className='flex-col gap-4 w-full'>
              <LoginWithGoogle></LoginWithGoogle>

              <View className='flex flex-row items-center justify-center mt-1 mb-1'>
                <View className='flex-grow h-px bg-gray-300' />
                <Text className='mx-2 text-gray-500'>hoặc</Text>
                <View className='flex-grow h-px bg-gray-300' />
              </View>

              <Button
                className='flex flex-row items-center justify-center w-full bg-purple-600 rounded-md p-3'
                onPress={() => router.push('/login')}
              >
                <Ionicons name='car' size={20} color='white' className='mr-2' />
                <Text className='text-white font-medium'>
                  Đăng nhập dành cho Xế
                </Text>
              </Button>
            </View>
          </CardContent>
          <CardFooter className='flex items-center justify-center'>
            <Text className='text-gray-600'>
              Chưa có tài khoản? Đăng kí tại đây
            </Text>
          </CardFooter>
        </Card>
      </View>
    </LinearGradient>
  );
}
