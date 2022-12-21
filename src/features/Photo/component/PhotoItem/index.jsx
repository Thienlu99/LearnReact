import React from 'react';
import PropTypes from 'prop-types';

PhotoItem.propTypes = {
    album: PropTypes.object.isRequired,
};

function PhotoItem(props) {
    const {album} = props;
    // console.log(album)
    return (
        <div className='album'>
        <div className='album__thumbnai'>
            <img src={album.thumbnaiURL} alt={album.name} />
        </div>
            <p className='album__name'>{album.name}</p>
        </div>
    );
}

export default PhotoItem;