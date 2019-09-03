import React, { Component, Fragment } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import TopBanner from './TopBanner';
import MainContents from './MainContents';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

class Home extends Component {

    componentWillMount() {
        const { nickNm } = this.props.sUser;

        this.setState({
            nickNm
        })
    }

    state = {
        isLoading : true,
      }

    render() {

        onLoadContents = () => {
            this.setState({
                isLoading: !this.state.isLoading
            });
        }

        const { isLoading } = this.state;

        if(isLoading){
            setTimeout(onLoadContents, 500);
        }

        return (
            <ScrollView style={styles.container}>
                  {
                      isLoading ? <Spinner visible={true} /> : 
                      <View>
                          <TopBanner></TopBanner>
                          <MainContents navigation={this.props.navigation}></MainContents>
                      </View>
                  }
              </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        flex : 1,
        backgroundColor: 'white'
    }
});
  
function mapStateToProps(sUser) {
    return {
      ...sUser
    };
  }
  
  const mapDispatchToProps = dispatch => ({
    signUp: sUser => dispatch(signUp(sUser)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  
