import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LgoinNavigators from './LgoinNavigators';
import BottomTabNavigators from './BottomTabNavigators';
import { createAppContainer } from 'react-navigation';



let BottomTabNavigation = createAppContainer(BottomTabNavigators);
let LoginNavigation = createAppContainer(LgoinNavigators);

class Navigators extends Component {

    getNavigation = () => {

        const { userId, email, token  } = this.props.sUser;
 
        if(userId && email && token){
            return <BottomTabNavigation />
        } else{
            return <LoginNavigation/>
        }
    }

    render() {

        return (
            <Fragment>
                {
                    this.getNavigation()
                }
            </Fragment>
        )}
    }

function mapStateToProps(sUser) {
  return {
    ...sUser
  };
}

export default connect(mapStateToProps, null)(Navigators);
