'use client'
import React from 'react'
import SearchBar from '../component/searchBar'
import LeftNav from '../component/leftNav'
import WrapperList from '../component/WrapperList'
import style from './index.module.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const index = () => {
    return (
        <div className={style.container}>
            <SearchBar />
            <DndProvider backend={HTML5Backend}>
                <div className={style.wrapper}>
                    <LeftNav />
                    <WrapperList />
                </div>
            </DndProvider>
        </div>
    )
}

export default index