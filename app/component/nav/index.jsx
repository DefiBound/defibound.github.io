import React from 'react'
import style from './index.module.css'
import { ConnectButton } from '@mysten/dapp-kit';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const index = () => {
    const router = useRouter()
    return (
        <div className={style.container}>
            <Image src='icon.png' width={70} height={63} alt='img'></Image>
            <button className={style.cssbuttons_io_button} onClick={()=>{router.push('/myWrapper')}}>
                My Wrapper
                <div className={style.icon}>
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </button>
            <button className={style.cssbuttons_io_button}>
                Get started
                <div className={style.icon}>
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </button>
            <button className={style.cssbuttons_io_button}>
                Get started
                <div className={style.icon}>
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </button>
            <ConnectButton style={{marginLeft:'20px'}}/>
        </div>
    )
}

export default index