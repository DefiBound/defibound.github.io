'use client'
import Homepage from './pages/home'
import { useAccounts } from "@mysten/dapp-kit";
import { useEffect } from "react";
import MyWrapeper from './pages/myWrapper'
export default function Home() {
  const addresses = useAccounts()
  useEffect(()=>{
    console.log(addresses);
  },[addresses])
  return (
    addresses ? <MyWrapeper/> : <Homepage/>
  );
}
