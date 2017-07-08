import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

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
            <AlbumDetail album={album} />
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
