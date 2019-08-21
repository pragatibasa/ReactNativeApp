import React from 'react';
import {
    ScrollView,
    View,
    Text, StyleSheet,Image, TouchableOpacity
} from 'react-native';

class Posts extends React.Component {
    render() {
        return (
            <ScrollView style={styles.postsContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.postContainer}>
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
                                <View style={styles.personDetails}>
                                    <View><Text style={styles.personName}>{post.name}</Text></View>
                                    <View>
                                        <Text style={styles.personDesignation}>{post.position}</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.postText}>{post.post}</Text>
                            </View>
                            <View><Text style={styles.comment}>{post.comments.length} Comments</Text></View>
                        </View>
                    )
                )}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    postsContainer: {
        display: 'flex',
        flex: 1,
    },
    post: {
        width: 300,
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
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 20,
    },
    postContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    person: {
        display: 'flex',
        flex: 1,
        width: 100,
        flexDirection: 'row',
    },
    personDetails: {
        marginLeft: 15,
        width: 100
    },
    personName: {
      fontWeight: 'bold',
    },
    personDesignation: {
        justifyContent: 'center',
        width: 200,
        fontSize: 10,
    },
    postText: {
      marginTop: 25
    },
    comment: {
        marginTop: 25,
    }
});

export default Posts;
