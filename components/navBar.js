import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class navBar extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity style={{alignItems: "flex-end", margin: 16}}
                 onPress={this.props.navigation.openDrawer}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({

});

export default navBar;