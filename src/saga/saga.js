import {takeEvery,put} from 'redux-saga/effects'
function* getProductList() {
    let response = yield fetch('http://localhost:5000/products');
    let data =  yield response.json();

}

function* addNewProduct(){
    let response = yield fetch('http://localhost:5000/products');
    let data =  yield response.json();

}
function* getProducts(){
    // yeild takeEvery(when to call,what to call)
    yield takeEvery('GET_PRODUCT_LIST',getProductList)

}

function* addProducts(){
    // yeild takeEvery(when to call,what to call)
    yield put('ADD_PRODUCT',addNewProduct)

}
export default getProducts;