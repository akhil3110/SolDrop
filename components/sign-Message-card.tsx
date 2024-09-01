

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

import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';


export const SignMessage = () => {

  const { publicKey, signMessage } = useWallet();

  const [message, setMessage] = useState<string>("")

 

  const sign = async() =>{

    try {
      console.log(message, "message")
      if(!message){
        toast.error("Message Required")
      }
  
      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage!(encodedMessage)
  
      if (!ed25519.verify(signature, encodedMessage, publicKey!.toBytes())){
        toast.error("Message signature invalid")
      }
      
      setMessage("")
      toast.success("Message signed")
    } catch (error: Error | any) {
      toast.error("Some thing went wrong")
      console.log(error)

    }
  }

    return ( 
        <Card className="h-[430px] sm:h-[400px]">
          <WalletConnectionButtons />
          <CardHeader className=" mt-4">
            <CardTitle>Sign Message</CardTitle>
            <CardDescription>
              Sign a message using your wallet
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 mt-5 sm:mt-2">
              <Label htmlFor="message">Message</Label>
              <Input
                onChange={(e) => { setMessage(e.target.value) } } 
                type="text" 
              />
            </div>
          </CardContent>
          <CardFooter className="mt-5 sm:mt-2">
            <Button className="w-full" onClick={sign} >Sign</Button>
          </CardFooter>
        </Card>
     );
}
 
