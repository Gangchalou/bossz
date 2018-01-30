/*
* 包含n个reducer函数(根据老的state和指定action返回一个新的state)的模块*/
import {combineReducers} from 'redux'
function xxx(state=10,action) {
    return state
}function yyy(state=200,action) {
    return state
}
export default combineReducers({
    xxx,
    yyy
})
//外部得到的state结构：{xxx: 0 ,yyy: 0}