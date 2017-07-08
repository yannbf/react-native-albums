import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        const url = 'https://rallycoding.herokuapp.com/api/music_albums';
        axios.get(url)
             .then(response =>
                 this.setState({
                     albums: response.data
                 })
             );
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <Text key={album.title}>{album.title}</Text>
        );
    }

    render() {
        return (
            <View>
                { this.renderAlbums() }
            </View>
        );
    }
}

export default AlbumList;
