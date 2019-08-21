import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {connect} from "react-redux";

class ViewMakersScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            //Heading/title of the header
            title: navigation.getParam('Title', 'Makers'),
            //Heading style
            headerTitleStyle: {
                // fontFamily: 'roboto',
                alignSelf: 'center'
            },
            headerStyle: {
                backgroundColor: navigation.getParam('BackgroundColor', 'black'),
            },
            //Heading text color
            headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
            headerRight: (
                <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
                    <Image
                        source={require('../assets/images/settings-icon.png')}
                        style={styles.arrowImage}
                    />
                </TouchableOpacity>
            ),
        };
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <View style={styles.makers}>
                        {this.props.makers.slice(0,9).map((user, index) =>
                            (<Image
                                key={index}
                                source={{uri: user.photo}}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 400/ 2
                                }}
                            />)
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    makers: state.makers.makers,
});

export default connect(mapStateToProps)(ViewMakersScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    }
});
