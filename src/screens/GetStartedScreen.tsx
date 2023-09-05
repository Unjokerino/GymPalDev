import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 gap-2 justify-end p-4 bg-black">
      <View className="gap-y-4 items-start">
        <View>
          <Text className="text-4xl font-bold text-white">Make your body healthier and</Text>
          <Text className="text-4xl font-bold text-primary">stronger</Text>
        </View>
        <Text className="text-sm text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt velit ipsam, tempore
          consectetur odio nulla inventore eum quas non praesentium consequuntur placeat totam nam
          tenetur magni nostrum dolores facilis autem?
        </Text>
        <TouchableOpacity className="flex-none py-4 px-10 bg-primary rounded-3xl">
          <Text className="text-white text-base">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;
