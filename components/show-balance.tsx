"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface ShowBalanceProps{
    balance: number
}

export function ShowBalance({
    balance
}: ShowBalanceProps) {
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Check Balance</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Balance</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            {balance ? (
                <div>
                    Availabe Balance is: {balance}
                </div>
            ): (
                <div className="text-red-500/95 text-center font-bold">
                    <div>
                        Unable To get Balance
                    </div>
                    <div>
                        Check wether your wallet is connected or not
                    </div>
                </div>
            ) }
            
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
