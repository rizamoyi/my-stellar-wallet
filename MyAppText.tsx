import { useEffect, ReactNode } from 'react';
import { useFonts } from 'expo-font';

const MyAppText = ({ children }: { children: ReactNode }) => {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      // Font loaded, you can hide splash screen or do other operations
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Render nothing until fonts are loaded
  }

  return <>{children}</>;
};

export default MyAppText;
