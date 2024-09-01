"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { WalletConnectionButtons } from "./wallet-connection-buttons"
import { useEffect, useState } from "react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import {ShowBalance} from "./show-balance"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"




export const AriDropCard = () => {

  const router = useRouter();
  const wallet = useWallet()
  const {connection} = useConnection() 

  const [amount, setAmount] = useState<number>(0)
  const [balance,setBalance] = useState(0)

  const getBalance = async() =>{

    if(!wallet.publicKey){
      return
    }

    const availableBalance = await connection.getBalance(wallet.publicKey!)
    setBalance(availableBalance/ LAMPORTS_PER_SOL)
  }

  
  const AddSol = async () => {

    if(amount <= 0){
      toast.error("Please enter a valid amount")
      return
    }

    await connection.requestAirdrop(wallet.publicKey!,amount * 1000000000)
    toast.success("Airdrop Successful check your wallet")
    router.refresh()
  }

    return ( 
        <Card className="h-[430px] sm:h-[400px]">
          <WalletConnectionButtons/>
          <CardHeader className="mt-5">
            <CardTitle>Air Drop</CardTitle>
            <CardDescription>
              Air Drop Sol to your wallet
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Enter Amount</Label>
              <Input 
                onChange={(e) => {
                  setAmount(parseInt(e.target.value))
                }} 
                type="number" 
              />
            </div>
          </CardContent>
          <CardFooter className="mt-2 sm:mt-5">
            <div className="w-full flex flex-col gap-y-5 sm:flex-row justify-around">
            <Button className="w-full sm:w-40" onClick={AddSol} >Add Sol</Button>
            <div className="w-full sm:w-40" onClick={getBalance}  >
              <ShowBalance balance={balance} />
            </div>
            </div>
          </CardFooter>
        </Card>
     );
}
 
 