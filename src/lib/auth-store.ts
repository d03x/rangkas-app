import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";
const AUTH_KEY_SECURE = "NURENDRA_APPRI_0092";
const setAuthToken = async (value: string) => {
  try {
    await SecureStore.setItemAsync(AUTH_KEY_SECURE, value);
  } catch (error: any) {
    throw error;
  }
};

const getAuthToken = async () => {
  return await SecureStore.getItemAsync(AUTH_KEY_SECURE);
};

export { setAuthToken, getAuthToken };
