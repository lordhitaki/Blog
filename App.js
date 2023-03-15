import { Text, 
         View,
         SafeAreaView,
         StatusBar,
          } from 'react-native';

import Logo1 from './header';
import TabMenu from './src/componets/tabMenu';
import BackgroudMain from './src/componets/background';


export default function App() {
  return (
    <SafeAreaView>
    <StatusBar 
    backgroundColor="#ffffff"
    barStyle="dark-content"
    />
    <View>
      <Logo1/>
    </View>
    <View>
      <TabMenu/>
    </View>
    <View>
      <BackgroudMain/>
    </View>
  </SafeAreaView>
    
  );
}



