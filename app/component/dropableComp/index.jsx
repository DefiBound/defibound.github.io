import React, { useState } from 'react'
import style from './index.module.css'
import { useDrop } from 'react-dnd'
import { Button, Modal } from 'antd';
const DropableComp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'item',
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
    drop: (item) => {
      showModal()
    }
  }))
  return (
    <div>
      <div className={style.container} ref={drop}>+</div>
      <Modal title="Create Wrapper" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
        <Button>Create</Button>
      </Modal>
    </div>
  )
}

export default DropableComp