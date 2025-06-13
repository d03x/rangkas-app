import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import { selectAuthenticated, setAuth } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setAuthToken } from "@/lib/auth-store";
import { AppScreens } from "@/navigation/AppNavigation/AppScreens";
import { type AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import { useEffect } from "react";
import { Alert, View } from "react-native";

export default function OnBoarding({ navigation }: AppScreenProps) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuthenticated);
  const toHome = async () => {
    try {
      const token = "ABCDEFGHTIJKLMN";
      await setAuthToken(token);
      dispatch(setAuth(true));
      if (auth) {
        navigation.replace(AppScreens.HOME);
      }
    } catch (error: any) {
      Alert.alert("OPPS:[1]", error.message);
    }
  };
  return (
    <View style={{ padding: 25, gap: 23 }}>
      <Input placeholder="Email anda" label={"Email"} />
      <Input secureTextEntry placeholder="Kata sandi anda" label={"Password"} />
      <Button onPressIn={toHome}>Login</Button>
    </View>
  );
}
