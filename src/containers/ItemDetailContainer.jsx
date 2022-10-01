import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../components/ItemDetail";
import Loader from '../components/Loader';
import { doc, getDoc } from "firebase/firestore";
import db  from "../utils/firebaseConfig";


const ItemDetailContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        const getProduct = async () => { 
        const docRef = await getDoc(doc(db, "products", id))
        return {id: id, ...docRef.data()}
        }
        getProduct()
        .then(result => setData(result))
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