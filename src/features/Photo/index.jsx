import React from 'react';
import PropTypes from 'prop-types';
import PhotoList from './component/PhotoList';

Photo.propTypes = {
};


function Photo(props) {
    const albumList = [
        {
            id: 1,
            name:"Túp Lều Vàng",
            thumbnaiURL: "https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg"
        },
        {
            id: 2,
            name:"Lựa Chọn Của Anh ",
            thumbnaiURL: "https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/6/8/9/b/689b9f49c7ceb4ca4dc326571bba4e2a.jpg"
        },
        {
            id: 3,
            name:"Những Lời Dối Gian",
            thumbnaiURL: "https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/4/7/7/5/47755662b9802742229217de267b24fe.jpg"
        },
        
    ]
    return (
        <div>
        <h2>Nhạc album tất cả</h2>
            <PhotoList  albumList={albumList}/>
        </div>
    );
}

export default Photo;