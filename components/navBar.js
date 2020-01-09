import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    DrawerLayoutAndroid
} from 'react-native';


class NavBar extends React.Component {
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
          );
          return (
            <DrawerLayoutAndroid
              drawerWidth={300}
              drawerPosition="left"
              renderNavigationView={() => navigationView}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
              </View>
              {this.props.view}
            </DrawerLayoutAndroid>
          );
    }
};

const styles = StyleSheet.create({

});

export default NavBar;