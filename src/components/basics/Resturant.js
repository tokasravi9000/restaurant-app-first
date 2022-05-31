import React, { useState } from 'react';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import "./style.css";

const uniqueList = [
    ...new Set(
        Menu.map((currentValue) => {
            return currentValue.category;
        })
    ),
    "All"
];

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    //console.log(menuData);
    const filterItem = (category) => {

        if(category === "All"){
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((currentValue) => {
            return currentValue.category === category;
        }); 
        setMenuData(updatedList);
    }      
    return (
        <>
            <Navbar filterItem = {filterItem} menuList = {menuList}/>
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Resturant;