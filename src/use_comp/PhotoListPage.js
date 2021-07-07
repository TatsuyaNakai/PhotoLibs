import React,{ useState, useEffect, createContext } from 'react';
import PhotoPanel from './PhotoPanel';

export const photoContext=createContext();

const PhotoListPage = () => {
    const [photos, setPhotos]=useState([]);       //初期状態で空になってる配列をphotoに作る。

    useEffect(()=>{
        const callApi = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const resJson = await res.json();      //このjsonはいま配列の状態で止まってる。
            // このjsonにデータ（配列）が入ってて、callApi自体には関数が入ってるから、使えない。
            setPhotos(resJson.slice(0, 4));      //長いオブジェクトのデータを４未満の配列で切り抜いた。それをphotoに格納してる。
            //元の配列を壊さないためにsliceで格納する。
        };
        callApi();       //一回呼ぶとsetPhotoが更新されて再レンダリングされるから、無限ループに陥る。　初回だけさせるなら、useEffectが必要になる。
    }, []);
    // console.log(photos);

    return (
        <div className='page'>
            <style jsx>{`
            .page{
                background: yellowgreen;
                padding-bottom:30px;
            }`}
            </style>
            <h2>PhotoListPage</h2>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <photoContext.Provider value={photo}>       {/* 一番外でラップするとphotoが取れない */}
                            <PhotoPanel />                          {/* photosで取ると4つの配列が取れるから、子コンポーネントに渡せない。 */}
                        </photoContext.Provider>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PhotoListPage;