import { Image, TextInput, View } from "react-native";
import { icons } from "@/constants/icons";

const SearchBar = ({onPress, placeholder}: {onPress: () => void, placeholder: string}) => {    
    return (
        <View className="flex flex-row items-center justify-between bg-dark-200 rounded-full px-5 py-4">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff"/>
            <TextInput 
                value=""
                onChangeText={() => {}}
                onPress={onPress}
                placeholder={placeholder} 
                placeholderTextColor="#ab8bff" 
                className="flex-1 ml-2 text-white"
            />
        </View>
    );
};

export default SearchBar;