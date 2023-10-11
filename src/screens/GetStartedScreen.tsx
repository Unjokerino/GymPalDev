import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import classNames from 'classnames';

const GetStarted = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('screen').width;
  const scrollRef = React.useRef<ScrollView>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      title: 'Make your body healthier and',
      title2: 'stronger',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt velit ipsam, tempore consectetur odio nulla inventore eum quas non praesentium consequuntur placeat totam nam tenetur magni nostrum dolores facilis autem?',
      image: require('../../assets/images/GetStartedScreen/01.png'),
    },
    {
      title: 'Slide 2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt velit ipsam, tempore consectetur odio nulla inventore eum quas non praesentium consequuntur placeat totam nam tenetur magni nostrum dolores facilis autem?',
    },
    {
      title: 'Slide 3',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt velit ipsam, tempore consectetur odio nulla inventore eum quas non praesentium consequuntur placeat totam nam tenetur magni nostrum dolores facilis autem?',
    },
  ];

  const onChangeSlide = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * screenWidth, animated: true });
    setCurrentSlide(index);
  };

  return (
    <View className="flex-1 justify-end bg-black">
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        className="flex-1">
        {slides.length
          ? slides.map((slide, index) => {
              return (
                <View key={index} style={{ width: screenWidth }} className="flex-1 p-4">
                  <ImageBackground
                    source={slide.image}
                    resizeMode="cover"
                    className="flex-1"></ImageBackground>
                  <View className="gap-y-4 items-start mt-auto">
                    <View>
                      <Text className="text-4xl font-bold text-white">{slide.title}</Text>
                      {slide.title2 ? (
                        <Text className="text-4xl font-bold text-primary">{slide.title2}</Text>
                      ) : null}
                    </View>
                    <Text className="text-sm text-gray-400">{slide.description}</Text>
                  </View>
                </View>
              );
            })
          : null}
      </ScrollView>
      <View className="flex flex-row items-center space-x-4 p-4">
        <TouchableOpacity className="flex-none py-4 px-10 bg-primary rounded-3xl">
          <Text className="text-white text-base">Get Started</Text>
        </TouchableOpacity>
        {slides.length
          ? slides.map((slide, index) => {
              return (
                <TouchableOpacity
                  onPress={() => onChangeSlide(index)}
                  key={index}
                  className={classNames('flex-none w-4 h-4 rounded-full', {
                    'bg-gray-400': currentSlide !== index,
                    'bg-primary': currentSlide === index,
                  })}></TouchableOpacity>
              );
            })
          : null}
      </View>
    </View>
  );
};

export default GetStarted;
