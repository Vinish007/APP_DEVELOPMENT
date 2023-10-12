import axios from 'axios'

const URL = 'http://localhost:8080/products';
const url='/get?page=${currentPage}&size=${itemsPerPage}/{sortBy}/{sortOrder}'
class ProductService{

    getAllProducts(){
        return axios.get(URL)
    }
    getProductsPage(){
        return axios.get(URL+url);
    }

    createProduct(product){
        return axios.post(URL,product)
    }

    getProductById(productId){
        return axios.get(URL + '/' + productId);
    }

    updateProduct(productId, product){
        return axios.put(URL + '/' +productId, product);
    }

    deleteProduct(productId){
        return axios.delete(URL + '/' +productId);
    }
    deleteAllProduct(productId){
        return axios.delete(URL);
    }
}

export default new ProductService();