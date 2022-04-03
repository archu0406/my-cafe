import React from 'react';
import './Menu.css';

const Menu = (props) => {
    return (
        <div style={{ background: `url('${props.bgImg}') no-repeat center center/cover` }} className='menu'>
            <div className="containerImg">
                <div style={{ background: `url('${props.bgImg1}') no-repeat center center/cover` }} className="left"></div>
                <div style={{ background: `url('${props.bgImg2}') no-repeat center center/cover` }} className="right"></div>
            </div>
        </div>
    )
}

export default Menu;