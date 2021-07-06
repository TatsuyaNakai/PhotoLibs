import PhotoDetail from './PhotoDetail';

const PhotoPanel = () => {

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
            <h3>PhotoPanel</h3>
            <PhotoDetail />
        </div>
    );
}

export default PhotoPanel;