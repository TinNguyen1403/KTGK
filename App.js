import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import { MyContextControllerProvider } from './index';

const Stack = createStackNavigator();

// Tạo hàm để tạo các tùy chọn cho header
const getHeaderOptions = (title, headerLeftComponent = null) => ({
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#fff',
  },
  title,
  headerLeft: headerLeftComponent,
});

const App = () => {
  return (
    <MyContextControllerProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={getHeaderOptions('Đăng nhập')}
          />
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={getHeaderOptions('Trang chủ', () => null)}
          />
          <Stack.Screen 
            name="Register" 
            component={Register} 
            options={getHeaderOptions('Đăng ký')}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContextControllerProvider>
  );
};

export default App;
