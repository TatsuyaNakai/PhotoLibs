import PhotoDetail from './PhotoDetail';

const PhotoPanel = (props) => {
    // console.log({props});

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
            <h3>{props.title}</h3>
            <PhotoDetail 
                url={props.url}
            />
        </div>
    );
}

export default PhotoPanel;