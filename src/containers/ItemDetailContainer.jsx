import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../components/ItemDetail";
import Loader from '../components/Loader';
import Products from '../utils/products';
import CustomFetch from '../utils/CustomFetch';


const ItemDetailContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        CustomFetch(2000, Products.find(item => item.id === parseInt (id)))
            .then(result => setData(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id]);


    return (
        <div className='main'>
            {loading ? <Loader/>  :      
                <div className="cardContainer">
                    <ItemDetail Products={data}/>
                </div> }
        </div>
    );
}


export default ItemDetailContainer ; 