import { signOut } from 'firebase/auth'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { auth } from '../config/FireBase'


export default function HomeScreen() {
    const handleLogOut = async () => {
        await signOut(auth)
    }
    return (
        <SafeAreaView className="flew-1 flex-row justify-center items-center">
            <Text className="text-lg">HomeScreen</Text>
            <TouchableOpacity onPress={handleLogOut} className="p-1 bg-red-400 rounded-lg">
                <Text className="text-white text-lg font-bold">
                    logOut
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
