import {
  createNavigatorFactory,
  type EventArg,
  type NavigatorTypeBagBase,
  type ParamListBase,
  type StackActionHelpers,
  StackActions,
  type StackNavigationState,
  StackRouter,
  type StackRouterOptions,
  type StaticConfig,
  type TypedNavigator,
  useNavigationBuilder,
} from "@react-navigation/native";
import * as React from "react";
import type {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackNavigatorProps,
} from "@react-navigation/native-stack";
import { NativeStackView } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import LoginScreen from "@/screens/Auth/LoginScreen";
import { useAppSelector } from "@/hooks/store";
import { selectAuthenticated } from "@/features/auth/authSlice";
function NativeStackNavigator({
  id,
  initialRouteName,
  children,
  layout,
  screenListeners,
  screenOptions,
  screenLayout,
  UNSTABLE_router,
  ...rest
}: NativeStackNavigatorProps) {
  const { state, describe, descriptors, navigation, NavigationContent } =
    useNavigationBuilder<
      StackNavigationState<ParamListBase>,
      StackRouterOptions,
      StackActionHelpers<ParamListBase>,
      NativeStackNavigationOptions,
      NativeStackNavigationEventMap
    >(StackRouter, {
      id,
      initialRouteName,
      children,
      layout,
      screenListeners,
      screenOptions,
      screenLayout,
      UNSTABLE_router,
    });

  React.useEffect(
    () =>
      // @ts-expect-error: there may not be a tab navigator in parent
      navigation?.addListener?.("tabPress", (e: any) => {
        const isFocused = navigation.isFocused();

        // Run the operation in the next frame so we're sure all listeners have been run
        // This is necessary to know if preventDefault() has been called
        requestAnimationFrame(() => {
          if (
            state.index > 0 &&
            isFocused &&
            !(e as EventArg<"tabPress", true>).defaultPrevented
          ) {
            // When user taps on already focused tab and we're inside the tab,
            // reset the stack to replicate native behaviour
            navigation.dispatch({
              ...StackActions.popToTop(),
              target: state.key,
            });
          }
        });
      }),
    [navigation, state.index, state.key]
  );
  const isAuth = useAppSelector(selectAuthenticated);
  const newDescriptors: typeof descriptors = {};
  for (const key in descriptors) {
    const descriptor: any = descriptors[key];
    newDescriptors[key] = {
      ...descriptor,
      render() {
        return descriptor.render();
      },
    };
  }
  return (
    <NavigationContent>
      <NativeStackView
        {...rest}
        state={state}
        navigation={navigation}
        descriptors={newDescriptors}
        describe={describe}
      />
    </NavigationContent>
  );
}

export function createAppStackNavigator<
  const ParamList extends ParamListBase,
  const NavigatorID extends string | undefined = undefined,
  const TypeBag extends NavigatorTypeBagBase = {
    ParamList: ParamList;
    NavigatorID: NavigatorID;
    State: StackNavigationState<ParamList>;
    ScreenOptions: NativeStackNavigationOptions;
    EventMap: NativeStackNavigationEventMap;
    NavigationList: {
      [RouteName in keyof ParamList]: NativeStackNavigationProp<
        ParamList,
        RouteName,
        NavigatorID
      >;
    };
    Navigator: typeof NativeStackNavigator;
  },
  const Config extends StaticConfig<TypeBag> = StaticConfig<TypeBag>
>(config?: Config): TypedNavigator<TypeBag, Config> {
  return createNavigatorFactory(NativeStackNavigator)(config);
}
