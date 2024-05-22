import React from 'react'
import style from './index.module.css'
import DragableComp from '../../component/dragableComp'
import Image from 'next/image'
const index = () => {
    return (
        <div className={style.container}>
            <DragableComp>
                <Image src='icon.png' style={{width:'50%'}} width={100} height={100} draggable='false' alt='img'></Image>
            </DragableComp>
            <DragableComp>
                <Image src='icon.png' style={{width:'50%'}} width={100} height={100} draggable='false' alt='img'></Image>
            </DragableComp>
        </div>
    )
}

export default index