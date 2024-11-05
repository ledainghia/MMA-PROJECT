import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
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
import { Link, Stack, useRouter } from 'expo-router';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Formik } from 'formik';

export default function login() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <LinearGradient colors={['#FFF2D5', '#e3cbff']}>
        <View className='h-full w-full flex items-center justify-center '>
          <Card className='w-full max-w-sm'>
            <View className='w-full flex items-start p-5'>
              <Button onPress={() => router.push('/')} variant={'ghost'}>
                <Ionicons name='arrow-back' size={24} color='black' />
              </Button>
            </View>

            <CardHeader className='flex items-center'>
              <CardTitle className='mt-6 text-3xl'>
                Chào mừng sự trở lại
              </CardTitle>
              <CardDescription className='mt-3'>
                Điền thông tin để tụi mình xác thực cho bạn nhé!
              </CardDescription>
            </CardHeader>
            <CardContent className='flex items-center justify-center p-4 rounded-md'>
              <View className='flex-col gap-4 w-full'>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  onSubmit={(values) => console.log(values)}
                >
                  {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View className='flex-col gap-4 w-full'>
                      <Input
                        placeholder='Email'
                        aria-labelledby='emailLabel'
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        aria-errormessage='emailError'
                        value={values.email}
                      />

                      <View className='relative'>
                        <Input
                          placeholder='Password'
                          secureTextEntry={!passwordVisible}
                          onBlur={handleBlur('password')}
                          onChangeText={handleChange('password')}
                          value={values.password}
                        />
                        <TouchableOpacity
                          onPress={() => setPasswordVisible(!passwordVisible)}
                          className='absolute right-2 top-2'
                        >
                          <Ionicons
                            name={passwordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color='gray'
                          />
                        </TouchableOpacity>
                      </View>
                      <View className='flex w-full items-end'>
                        <Button variant='ghost'>
                          <Text>Quên mật khẩu?</Text>
                        </Button>
                      </View>

                      <Button
                        onPress={() => handleSubmit()}
                        className='flex flex-row items-center justify-center w-full bg-purple-600 rounded-md p-3'
                      >
                        <Text className='text-white font-medium'>
                          Đăng nhập
                        </Text>
                      </Button>
                    </View>
                  )}
                </Formik>
              </View>
            </CardContent>
            <CardFooter className='flex items-center justify-center'>
              <Text className='text-gray-600'>
                Chưa có tài khoản? <Link href={'/login'}>Đăng kí tại đây</Link>
              </Text>
            </CardFooter>
          </Card>
        </View>
      </LinearGradient>
    </>
  );
}
