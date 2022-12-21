import React from 'react';
import PropTypes from 'prop-types';
import PhotoItem from '../PhotoItem';
import "./style.scss";

PhotoList.propTypes = {
    albumList : PropTypes.array.isRequired,
};

function PhotoList(props) {
    const {albumList} = props;
    // console.log(albumList)
    return (
        <div>
             <ul className='album-list'>
             
                {albumList.map(album =>(
                    
                    <li key={album.id}>
                        <PhotoItem  album={album}/>
                    </li>
                    
                )) }
             </ul>
        </div>
    );
}

export default PhotoList;