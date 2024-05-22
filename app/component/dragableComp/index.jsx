
import React from 'react'
import { useDrag } from 'react-dnd'

/**
 * Your Component
 */
export default function Card({ children }) {
  const [{ dragging }, dragRef] = useDrag(//函数返回的第二个参数是拖拽对象的ref
    () => ({
      type: 'item',//这个type是用来区分拖拽组件类型的，有一些dropable格子可能只能放某些拖拽组件这个意思
      item: { id:1 },
      collect: (monitor) => ({
        //collect收到一个monitor对象，可以用来监控拖拽组件的状态，就是用来收集一些参数和状态，返回一个对象，这个对象是useDrag这个函数返回的数组的第一个元素
        // dragging:monitor.isDragging()
      })
    }),
    []
  )

//   if(dragging){
//     return(
//         <div ref={dragRef}></div>
//     )}
  

  return (
    <div ref={dragRef} style={{display:'flex',justifyContent:'center' , alignItems:'center' , margin:'15px 0'}}>
      {children}
    </div>
  )
}