import { Query, Mutation } from 'react-apollo';
import { Alert } from 'react-native';

const isNewToken = async (pushToken, refreshToken, accessToken) => {
    const originAccessToken = await AsyncStorage.getItem('accessToken');
    return !(originAccessToken === accessToken);
    
}

const updateToken = async (res) => {

    const { pushToken, refreshToken, accessToken } = res.header;

    if(isNewToken(pushToken, refreshToken, accessToken )){
        await AsyncStorage.setItem('pushToken', pushToken);
        await AsyncStorage.setItem('refreshToken', refreshToken);
        await AsyncStorage.setItem('accessToken', accessToken);
    }

    return layout(res.data);

} 

export default {
    query : (query, variables, layout) => {
        return (
            <Query query={query} variables={variables} >
                {( res ) => {
                    return updateToken(res, layout);
                }}
            </Query>
        )
    }, 
    mutation : (query, variables, layout) => {
        return (
            <Mutation query={query} variables={variables}>
                 {(queryExcution) => {
                    
                    queryExcution.finally = (res) => {
                        Alert.alert('호출', res);
                    }

                    return layout(queryExcution);
                    // queryExcution

                    // layout();

                    // queryExcution({
                    //     variables
                    // }).then(async (res) => {
                    //     updateToken(res);
                    // }).catch((err) => {
                    //     Alert.alert('회원가입 오류', `회원가입 오류, 관리자에게 문의해주세요.\n ${err}`)}
                    // );
                }}
            </Mutation>
        )
    }, 
}