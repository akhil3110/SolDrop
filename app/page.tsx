import { AriDropCard } from "@/components/airdrop-card"
import { SignMessage } from "@/components/sign-Message-card"
import { TransferSol } from "@/components/transfer-sol-card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className=" h-full w-full flex items-center justify-center">
      <Tabs defaultValue="Airdrop" className="w-[350px] sm:w-[600px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Airdrop">Airdrop</TabsTrigger>
        <TabsTrigger value="Transfer">Transfer Sol</TabsTrigger>
        <TabsTrigger value="Sign">Sign Message</TabsTrigger>
      </TabsList>
      <TabsContent value="Airdrop">
        <AriDropCard />
      </TabsContent>
      <TabsContent value="Transfer">
        <TransferSol />
      </TabsContent>
      <TabsContent value="Sign">
        <SignMessage />
      </TabsContent>
    </Tabs>
    </div>
  )
}
