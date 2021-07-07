const PhotoDetail = (photo) => {

    return (
        <div className='detail'>
            <style jsx>{`
            .detail{
                background: skyblue;
                width:80%;
                margin:0 auto;
            }`}
            </style>
            <img className="photo" src={photo.children.children.url} />
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