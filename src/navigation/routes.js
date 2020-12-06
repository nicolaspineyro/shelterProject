import routeNames from './routeNames';
import AuthStack from './stacks/AuthStack';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import LaunchStack from './stacks/LaunchStack';
import Register from '../screens/Register/Register';
import passwordReset from '../screens/PasswordReset/PasswordReset';

const routes = [
  {
    routeName: routeNames.Launch,
    component: LaunchStack,
    options: {headerShown: false, gestureEnabled: false},
  },
  {
    routeName: routeNames.Login,
    component: Login,
    options: {headerShown: false, gestureEnabled: false},
  },
  {
    routeName: routeNames.Register,
    component: Register,
    options: {headerShown: false, gestureEnabled: false},
  },
  {
    routeName: routeNames.Home,
    component: Home,
    options: {headerShown: false},
  },
  // {
  //   routeName: routeNames.passwordReset,
  //   component: passwordReset,
  //   options: {headerShown: false},
  // },
];

export default routes;
