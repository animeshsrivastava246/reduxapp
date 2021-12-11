import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount)
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <div className="my-3">
            <h3>Bank Balance</h3>
            {/* <button className="btn btn-primary mx-2" onClick={()=>(dispatch(actionCreators.withdrawMoney(100)))}>-</button>
            Deposite / Withdraw
            <button className="btn btn-primary mx-2" onClick={()=>(dispatch(actionCreators.depositMoney(100)))}>+</button> */}
            <button className="btn btn-primary mx-2" disabled={balance===0} onClick={()=>{withdrawMoney(100)}}>-</button>
            Deposite / Withdraw - {balance}
            <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
        </div>
    )
}

export default Shop
