import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';
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
                    <FlatList
                        data={this.props.makers}
                        showsVerticalScrollIndicator={false}
                        numColumns={4}
                        columnWrapperStyle={styles.row}
                        renderItem={({item}) =>
                            <View style={styles.flatview}>
                                <Image
                                    source={{uri: item.photo}}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 400/ 2
                                    }}
                                />
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.email}>{item.hostel}</Text>
                            </View>
                        }
                        keyExtractor={item => item.email}
                    />
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
    row: {
        flex: 1,
        justifyContent: "space-around"
    }
});
