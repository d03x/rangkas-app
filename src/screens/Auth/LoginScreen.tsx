import Input from "@/components/Input/Input";
import ThemedView from "@/components/Layouts/ThemedView";
import { LoginCard, LoginForm } from "./components/styles";
import { CheckBox } from "@/components/CheckBox";
import Button from "@/components/Button";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import { AppScreens } from "@/navigation/AppNavigation/AppScreens";

export default function LoginScreen({ navigation }: AppScreenProps) {
  return (
    <ThemedView>
      <LoginCard>
        <LoginForm>
          <Input label="Email" placeholder="Alamat Email" />
          <Input label="Password" secureTextEntry placeholder="Kata Sandi" />
          <CheckBox title={"Ingat Saya?"} checked={true} />
          <Button
            onPress={() => {
              navigation.push(AppScreens.ONBOARDING);
            }}
          >
            Login
          </Button>
        </LoginForm>
      </LoginCard>
    </ThemedView>
  );
}
