import React from 'react';
import {
    ScrollView,
    View,
    Text, StyleSheet,Image, TouchableOpacity
} from 'react-native';

class Tasks extends React.Component {
    render() {
        return (
            <ScrollView style={styles.tasksContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.taskContainer}>
                    {this.props.tasks.map((post, index) =>
                        (
                            <View key={index} style={styles.task}>
                                <View style={styles.taskIcon}>
                                    <Image
                                        key={index}
                                        source={require('../../assets/images/pushpin.png')}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 400/ 2
                                        }}
                                    />
                                </View>
                                <View style={styles.postText}>
                                    <Text>{post.label}</Text>
                                </View>
                            </View>
                        )
                    )}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    tasksContainer: {
        display: 'flex',
        flex: 1,
    },
    task: {
        width: 90,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 150,
    },
    taskContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    taskIcon: {

    },
    postText: {
        marginTop: 25,
        alignSelf: 'flex-start',
        paddingLeft: 15
    },

});

export default Tasks;
