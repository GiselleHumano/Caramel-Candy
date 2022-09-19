import React from 'react';
import { useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import getList from '../utils/products';
import ItemList from './ItemList';
import Loader from './Loader';


const ItemListContainer = (props) => {
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
                <p>{props.greeting}</p>
                <div>
                    <ItemCount/>
                </div>
                <div className="cardContainer">
                    <ItemList Products={arrayList}/>
                </div> 
            </div>}
        </div>
    );
}


export default ItemListContainer; 