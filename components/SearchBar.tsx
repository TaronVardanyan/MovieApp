import { Image, TextInput, View } from "react-native";
import { icons } from "@/constants/icons";

const SearchBar = ({onPress, placeholder, value, onChangeText}: {onPress?: () => void, placeholder: string, value?: string, onChangeText?: (value: string) => void}) => {    
    return (
        <View className="flex flex-row items-center justify-between bg-dark-200 rounded-full px-5 py-4">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff"/>
            <TextInput 
                value={value}
                onChangeText={onChangeText}
                onPress={onPress}
                placeholder={placeholder} 
                placeholderTextColor="#ab8bff" 
                className="flex-1 ml-2 text-white"
            />
        </View>
    );
};

export default SearchBar;