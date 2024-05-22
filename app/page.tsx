'use client'
import Homepage from './pages/home'
import { useAccounts } from "@mysten/dapp-kit";
import { useEffect } from "react";
import MyWrapeper from './myWrapper/page'
import { useRouter } from 'next/navigation';
export default function Home() {
  const addresses = useAccounts()
  const router = useRouter()
  useEffect(()=>{
    console.log(addresses);
  },[addresses])
  return (
    addresses.length !== 0 ? router.push('/myWrapper') : <Homepage/>
  );
}
