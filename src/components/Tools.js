import React,{useState} from 'react';
import './style.css';

import Menu from './MenuApi';


import MenuCard from './MenuCard';


//use state react hooks


const Tools =()=>{
    const [menuData,setMenuData]=useState(Menu);

   

    const filterItem=(category)=>{
        const updatedList=Menu.filter((curr)=>{
            return curr.category===category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
          <nav className="navbar">
    <div className="btn-group">
    <button className="btn-group__item" onClick={()=> filterItem("frontend")}>Front-End</button>
    <button className="btn-group__item" onClick={()=> filterItem("backend")}>Back-End</button>
    <button className="btn-group__item" onClick={()=> filterItem("database")}>Database</button>
    <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>All</button>
    </div>
    </nav> 
      
            <MenuCard menudata={menuData}/>
        </>
    )
}

export default Tools;