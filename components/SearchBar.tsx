import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onPress?: () => void; // Used only on Home screen
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4 border-2 border-black-200 focus:border-accent space-x-3">
      <Image 
        source={icons.search} 
        className="w-5 h-5" 
        resizeMode="contain" 
        tintColor="#AB8BFF" 
       />
       
      <TextInput
        className="flex-1 ml-2 text-white font-bold text-base"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA4AB"
        editable={!onPress} // If we have an onPress (Home), disable typing
        onPressIn={onPress} // If we have an onPress (Home), handle the click
      />
    </View>
  )
}

export default SearchBar;