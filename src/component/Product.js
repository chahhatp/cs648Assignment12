import {Filter} from "./filter/Filter";
import {ProductTable} from "./table/ProductTable";
import {ProductForm} from "./form/ProductForm";
import {useState} from "react";

const PRODUCTS = {
    '1': {id: 1, category: 'Fashion', price: '$45.99', name: 'Tops'},
    '2': {id: 2, category: 'Fashion', price: '$50', name: 'Coats'},
    '3': {id: 3, category: 'Furniture', price: '$300', name: 'Chair'},
    '4': {id: 4, category: 'Furniture', price: '$865', name: 'Sofa'},
    '5': {id: 5, category: 'Music', price: '$1,600', name: 'Guitar'},
    '6': {id: 6, category: 'Fashion', price: '$352', name: 'Purse'}
};
export const Product = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [filter, setFilter] = useState('');

    const addProduct = (product) => {
        const key = Math.max(...Object.keys(products).map(key => parseInt(key))) + 1
        product.id = key
        const updatedProducts = {
            ...products,
            [key]: product
        }
        setProducts({...updatedProducts})
    }

    const handleDestroy = (id) => {
        let updatedProduct = products
        delete updatedProduct[id]
        setProducts({...updatedProduct})
    }

    return <div style={{width: 500}}>
        <h2>My Inventory</h2>
        <Filter filter={filter} setFilter={setFilter}/>
        <ProductTable products={products} filterText={filter} onDestroy={handleDestroy}/>
        <ProductForm onSave={addProduct}/>
    </div>
}