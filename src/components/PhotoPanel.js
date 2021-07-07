import PhotoDetail from './PhotoDetail';

const PhotoPanel = (photo) => {
    // console.log({photo});

    return (
        <div className='panel'>
            <style jsx>{`
            .panel{
                background: orange;
                padding-bottom:10px;
                width:80%;
                margin:0 auto;
            }`}
            </style>
            <h3>{photo.children.title}</h3>
            <PhotoDetail>
                {photo}
            </PhotoDetail>
        </div>
    );
}

export default PhotoPanel;