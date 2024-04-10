import '@tamagui/core/reset.css';
import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider, Text, View } from '@tamagui/core';
import appConfig from './tamagui.config';
import MyAppText from './MyAppText';

export default function App() {
  return (
    <TamaguiProvider config={appConfig}>
      <View flex={1} alignItems="center" justifyContent="center">
        <MyAppText>
          <Text>Hello Tamagui</Text>
        </MyAppText>
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}
