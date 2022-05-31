import React from 'react';
//import Menu from './MenuApi';
import "./style.css";

const Navbar = ({filterItem, menuList}) => {
    
    return (
        <>
            <div className="navbar">
                <div className="btn-group">
                    {menuList.map((currentValue) => {
                        return (
                            <button className='btn-group__item' onClick={() => filterItem(currentValue)}>{currentValue}</button>
                        );    
                    })}
                    
                    {/* <button className='btn-group__item' onClick={() => filterItem(lunch)}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem(evening)}>Evening</button>
                    <button className='btn-group__item' onClick={() => filterItem(dinner)}>Dinner</button> */}
                    {/* <button className='btn-group__item'>All</button> */}
                </div>    
            </div>
        </>
    )
}

export default Navbar;