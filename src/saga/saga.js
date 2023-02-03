import {takeEvery,put} from 'redux-saga/effects'
const getProductList = ()=>{
    let response = yield fetch('http://localhost:5000/products');
    let data =  yield response.json();

}

const addNewProduct = ()=>{
    let response = yield fetch('http://localhost:5000/products');
    let data =  yield response.json();

}
function *getProducts(){
    // yeild takeEvery(when to call,what to call)
    yield takeEvery('GET_PRODUCT_LIST',getProductList)

}

function *addProducts(){
    // yeild takeEvery(when to call,what to call)
    yield put('ADD_PRODUCT',addNewProduct)

}
export default getProducts;