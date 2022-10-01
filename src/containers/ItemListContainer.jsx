import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Loader from '../components/Loader';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        const consultFirestore = async () => {
            let q
            if (id) {
                q = query(collection(db, "products"), where("categoryId", "==", parseInt(id)))
            } else {
                q = query(collection(db, "products"))
            }

            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => (
                {
                    id: document.id,
                    ...document.data()
                }
            ))
            return dataFromFirestore
        }
        consultFirestore()
            .then(result => setData(result))
            .finally(() => setLoading(false))
        return
    }, [id])


    return (
        <div className='main'>
            {loading ? <Loader /> :

                <div className="cardContainer">
                    <ItemList Products={data} />
                </div>
            }
        </div>
    );
}


export default ItemListContainer; 