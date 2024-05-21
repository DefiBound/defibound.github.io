import React from 'react'
import SearchBar from '../../component/searchBar'
// import LeftNav from '../../component/leftNav'
// import WrapperList from '../../component/WrapperList'
import DragableComp from '../../component/dragableComp'
import style from './index.module.css'
import Image from 'next/image'
const index = () => {
    return (
        <div className={style.container}>
            <SearchBar />
            <div className={style.wrapper}>
                {/* <LeftNav/>
        <WrapperList/> */}
                <DragableComp>
                    <Image src='logo.jpg' layout='responsive' width={100} height={100} draggable='false'></Image>
                </DragableComp>
            </div>
        </div>
    )
}

export default index