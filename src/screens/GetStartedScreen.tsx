import { View, Text, TouchableOpacity } from 'react-native';
import React from "react";

const GetStarted = () => {
  return (
    <View className="flex-1 gap-2 justify-end p-4">
      <View className="gap-y-4">
        <View>
          <Text className="text-4xl font-bold text-black">Make your body healthier and</Text>
          <Text className="text-4xl font-bold text-primary">stronger</Text>
        </View>
        <Text className="text-sm text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt velit ipsam, tempore
          consectetur odio nulla inventore eum quas non praesentium consequuntur placeat totam nam
          tenetur magni nostrum dolores facilis autem?
        </Text>
        <View>
          <TouchableOpacity className="flex-none py-5 px-5 bg-primary rounded-3xl">
            <Text className="text-white">Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetStarted;
