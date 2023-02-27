import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/components/Navigation.js/Navigation';
import SafeArea from './src/components/SafeArea.js/SafeArea';

export default function App() {
  return (
    <SafeArea>
      <Navigation />
      <StatusBar style="auto" />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
