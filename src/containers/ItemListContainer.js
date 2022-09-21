import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Loader from '../components/Loader';
import Products from '../utils/products';
import CustomFetch from '../utils/CustomFetch';

const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams();

    useEffect(() => {
        setLoading(true)
        if (id) {
            CustomFetch(2000, Products.filter(item => item.categoryId === parseInt (id)))
                .then(result => setData(result))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            CustomFetch(2000, Products)
                .then(result => setData(result))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [id]);

    return (
        <div className='main'>
            {loading ? <Loader/>  :      

                <div className="cardContainer">
                    <ItemList Products={data}/>
                </div> 
            }
        </div>
    );
}


export default ItemListContainer; 