import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    const { title } = props.album;
    return (
        <View>
            <Text>{ title }</Text>
        </View>
    );
};

export default AlbumDetail;
