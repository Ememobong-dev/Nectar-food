import OnboardingScreen from "@/screens/OnboardingScreen";
import SplashScreen from "@/screens/SplashScreen";
import { useState } from "react";

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return <OnboardingScreen />;
}