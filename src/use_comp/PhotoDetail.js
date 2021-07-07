import {useContext} from 'react';
import {photoContext} from './PhotoListPage';


const PhotoDetail = () => {
    const photo=useContext(photoContext);

    // const 
    return (
        <div className='detail'>
            <style jsx>{`
            .detail{
                background: skyblue;
                width:80%;
                margin:0 auto;
            }`}
            </style>
            <img className="photo" src={photo.url} />
            <style jsx>{`
            .photo{
                display:block;
                margin:0 auto;
                width:300px;
                height:300px;
            }`}</style>
        </div>
    )
}
export default PhotoDetail;