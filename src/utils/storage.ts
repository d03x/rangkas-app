import AsyncStorage from "@react-native-async-storage/async-storage";

const Storage = {
    async save(key:string,value:string){
        await AsyncStorage.setItem(key,value);
    },
    async getItem(key:string){
        return await AsyncStorage.getItem(key);
    }
}

export default Storage;