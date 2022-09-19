import React from 'react';
import { useEffect, useState} from 'react';
import getList from '../utils/products';
import Loader from '../components/Loader';
import ItemDetail from '../components/ItemDetail';


const ItemDetailContainer = () => {
    const [arrayList, setArrayList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getList()
        .then((response) =>setArrayList(response))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    },[]);

    return (
        <div className='main'>
            {loading ? <Loader/>  :      
            <div>
                <div className="cardContainer">
                    <ItemDetail Products={arrayList}/>
                </div> 
            </div>}
        </div>
    );
}


export default ItemDetailContainer ; 