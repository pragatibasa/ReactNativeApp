import React from 'react';
import {
    ScrollView,
    View,
    Text, StyleSheet,Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Posts from './components/Posts';
import Tasks from './components/Tasks';

const tasks = [
    {
        label: "To Do",
        icon: '',
    },
    {
        label: "Files",
        icon: '',
    },
    {
        label: "Chat",
        icon: '',
    },
    {
        label: "Budget",
        icon: '',
    },
]

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('Title', 'BHAI'),
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

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <View style={styles.makersContainer}>
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
                        <TouchableOpacity
                                style={styles.btnContainer}
                                onPress={() => this.props.navigation.navigate('ViewMakers')}
                            >
                            <View style={styles.viewMakersBtn}>
                                <Text style={styles.makerBtnText}>View Makers</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Posts posts={this.props.posts}/>
                    <Tasks tasks={tasks}/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    makers: state.makers.makers,
    posts: state.posts.posts,
});

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    makersContainer: {
        display: 'flex',
    },
    makers: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
    },
    userImages: {
        width: 60,
        height: 60,
        borderRadius: 400/ 2
    },
    btnContainer: {
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        width: 150,
        height: 30,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 12 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    viewMakersBtn: {
        alignSelf: 'stretch',
    },
    makerBtnText: {
        textAlign: 'center',
    },
    postsContainer: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
    }
});
