import { useEffect } from 'react';
import PhotoPanel from './PhotoPanel';

const PhotoListPage = () => {
    // useEffect(() => {
    // }, []);

    const callApi = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await res.json();      //このjsonはいま配列の状態で止まってる。
        // console.log(json)
        return json;
    }

    // console.log(callApi())

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
                {callApi.map((json) => (
                    <li key={json.id}>
                        {json.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default PhotoListPage;