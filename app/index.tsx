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
import { useNavigation, useRouter } from 'expo-router';

export default function welcome() {
  const router = useRouter();
  return (
    <LinearGradient colors={['#FFF2D5', '#e3cbff']}>
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
              {/* Google Login Button */}
              <Button className='flex flex-row items-center justify-center w-full bg-white border border-gray-300 rounded-md p-3'>
                <Ionicons
                  name='logo-google'
                  size={20}
                  color='black'
                  className='mr-2'
                />
                <Text className='text-black font-medium font-QuickSand'>
                  Đăng nhập trở thành Ôm
                </Text>
              </Button>

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
