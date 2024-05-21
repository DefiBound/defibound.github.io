import React from 'react'
import style from './index.module.css'
import DragableComp from '../../component/dragableComp'
import Image from 'next/image'
const index = () => {
    return (
        <div className={style.container}>
            <DragableComp>
                <Image src='logo.jpg' layout='responsive' width={100} height={100} draggable='false'></Image>
            </DragableComp>
        </div>
    )
}

export default index