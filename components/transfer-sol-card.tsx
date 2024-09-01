//@ts-nocheck
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
import { useState } from "react"
import toast from "react-hot-toast"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";



export const TransferSol = () => {
    const {connection} = useConnection()
    const wallet = useWallet()


    const [amount, setAmount] = useState<number>(0)
    const [UserpublicKey, setUserPublicKey] = useState("")

    const transferSol = async () => {

      try {
        if(!UserpublicKey){
          toast.error("Please enter a valid public key")
          return
        }
  
        if(amount <= 0){
          toast.error("Please enter a valid amount")
          return
        }
        
        const transaction = new Transaction()
        
        transaction.add(SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(UserpublicKey),
          lamports: amount * LAMPORTS_PER_SOL
        }))

        await wallet.sendTransaction(transaction, connection)

        setUserPublicKey("")
        setAmount(0)
        toast.success("Transaction Successful")
  
      } catch (error: Error | any) {
        console.log(error.message)
        toast.error(error.message)
      }

    }

    return ( 
        <Card>
          <WalletConnectionButtons/>
          <CardHeader>
            <CardTitle>Transfer Sol</CardTitle>
            <CardDescription>
              Transfer Sol to another wallet by entering the recipient&apos;s address and the amount of Sol you want to send.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Public key of reciever</Label>
              <Input 
                onChange={(e) => {
                  setUserPublicKey(e.target.value)
                }}   
                type="text" 
              />
            </div>
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
          <CardFooter>
            <Button onClick={transferSol} >Send</Button>
          </CardFooter>
        </Card>
     );
}
 