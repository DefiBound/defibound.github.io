'use client'
import React, { useState } from 'react';

const DraggableComponent = ({ children }) => {
    const [position, setPosition] = useState({ x: 20, y: 20 })
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 })
    const [moveable, setMoveable] = useState(false)
    const onMouseDown = (e) => {
        setMoveable(true)
        const x = e.clientX - position.x
        const y = e.clientY - position.y
        setInitialPosition({ x, y })
    }

    const onMouseMove = (e) => {
        if (moveable) {
            const x = e.clientX - initialPosition.x
            const y = e.clientY - initialPosition.y
            setPosition({ x, y })
        }
    }

    const onMouseUp = (e) => {
        setMoveable(false)
    }

    return (
        <div
            style={{
                top: position.y,
                left: position.x,
                position: 'absolute',
                cursor: moveable ? 'grabbing' :'grab',
                border: 'solid black'
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
        >
            {children}
        </div>
    );
};

export default DraggableComponent;
