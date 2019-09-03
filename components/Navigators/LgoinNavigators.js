
import LoginScreen from '../Member/LoginScreen';
import PolicyList from '../Member/LoginScreen/PolicyList';
import SignUpForm from '../Member/LoginScreen/SignUpForm';
import { createStackNavigator } from 'react-navigation';

export default LgoinNavigators = createStackNavigator({
    loginScreen: LoginScreen,
    policyList: PolicyList,
    signUpForm: SignUpForm,
  }, {
    headerMode : 'none'
  });
  