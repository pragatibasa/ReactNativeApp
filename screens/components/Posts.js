import React from 'react';
import {
    ScrollView,
    View,
    Text, StyleSheet,Image, TouchableOpacity
} from 'react-native';

class Posts extends React.Component {
    render() {
        return (
            <ScrollView style={styles.postsContainer}>
                <View style={styles.post}>
                {this.props.posts.map((post, index) =>
                    (
                        <View key={index} style={styles.post}>
                            <View style={styles.person}>
                                <View style={styles.personImage}>
                                    <Image
                                        key={index}
                                        source={{uri: post.photo}}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 400/ 2
                                        }}
                                    />
                                </View>
                                <View style={styles.personDesignation}>
                                    <Text>{post.position}</Text>
                                </View>
                            </View>
                            <View >
                                <Text>{post.post}</Text>
                            </View>
                            <View><Text>{post.comments.length} Comments</Text></View>
                        </View>
                    )
                )}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    postContainer: {
        display: 'flex',
    },
    post: {
        width: 250,
        alignSelf: 'center',
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
        marginTop: 10,
        backgroundColor: '#fff'
    },
    person: {
        display: 'flex',
        flex: 1,
        width: 100,
        flexDirection: 'row',
    },
    personDesignation: {
        justifyContent: 'center'
    }
});

export default Posts;
