import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, FlatList, TextInput} from 'react-native';
import {connect} from "react-redux";

class ViewMakersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makers: []
        };
    }

    searchFilterFunction = text => {
        const newData = this.props.makers.filter(item => {
            const itemData = `${item.hostel.toUpperCase()}   
            ${item.name.toUpperCase()}`;

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });

        this.setState({ makers: newData });
    };

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('Title', 'Makers'),
            headerTitleStyle: {
                alignSelf: 'center'
            },
            headerStyle: {
                backgroundColor: navigation.getParam('BackgroundColor', 'black'),
            },
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

    componentDidMount() {
        this.setState({makers: this.props.makers});
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search Makers"
                        onChangeText={text => this.searchFilterFunction(text)}
                    />
                    <FlatList
                        data={this.state.makers}
                        showsVerticalScrollIndicator={false}
                        numColumns={4}
                        columnWrapperStyle={styles.row}
                        renderItem={({item}) =>
                            <TouchableOpacity
                                onPress={() => { alert(item.name) }}
                            >
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
                                <Text style={styles.hostel}>{item.hostel}</Text>
                            </View>
                            </TouchableOpacity>
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
    contentContainer: {
        padding: 20,
        display: 'flex',
    },
    input: {
        height: 40,
        borderRadius: 9,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 12 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderWidth: 1
    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    flatview: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    name: {
        fontSize: 10
    },
    hostel: {
        fontSize: 10
    }
});
