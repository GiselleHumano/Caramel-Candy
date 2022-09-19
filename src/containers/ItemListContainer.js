import React from 'react';
import { useEffect, useState} from 'react';
import getList from '../utils/products';
import ItemList from '../components/ItemList';
import Loader from '../components/Loader';


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
                <div className="cardContainer">
                    <ItemList Products={arrayList}/>
                </div> 
            </div>}
        </div>
    );
}


export default ItemListContainer; 