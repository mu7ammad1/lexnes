import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { signOutAction } from "@/app/actions/actions"
import Link from "next/link"
import { CookieIcon, LifeBuoyIcon, LogOutIcon, WalletCardsIcon } from "lucide-react"

export default function Drop({ avatar }: any) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className="size-8">
                    <AvatarImage src={avatar} alt="@shadcn" className="object-cover" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="m-1 mr-3 w-44 rounded-xl border-none bg-secondary *:rounded-xl *:p-0 *:m-0 space-y-1 *:*:justify-normal">
                <DropdownMenuItem>
                    <Button asChild size={"sm"} variant={"secondary"} className="w-full rounded-xl dark:hover:bg-neutral-700 hover:bg-neutral-200 ">
                        <Link href="/help-Feedback">
                            <LifeBuoyIcon className="w-3 h-3" />
                            Help & Feedback
                        </Link>
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-primary/10" />
                <DropdownMenuItem>
                    <Button asChild size={"sm"} variant={"secondary"} className="w-full rounded-xl dark:hover:bg-neutral-700 hover:bg-neutral-200 ">
                        <Link href="/subscription">
                            <WalletCardsIcon className="w-3 h-3" />
                            Subscription
                        </Link>
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-primary/10" />
                <DropdownMenuItem>
                    <Button asChild size={"sm"} variant={"secondary"} className="w-full rounded-xl dark:hover:bg-neutral-700 hover:bg-neutral-200 ">
                        <Link href="/privacy-policy">
                            <CookieIcon className="w-3 h-3" />
                            Privacy Policy
                        </Link>
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button asChild size={"sm"} variant={"secondary"} className="w-full rounded-xl dark:hover:bg-neutral-700 hover:bg-neutral-200 ">
                        <Link href="/help-Feedback">
                            <LifeBuoyIcon className="w-3 h-3" />
                            Help & Feedback
                        </Link>
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-primary/10" />
                <DropdownMenuItem>
                    <form action={signOutAction} className="w-full *:justify-normal">
                        <Button type="submit" size={"sm"} variant={"secondary"} className="w-full text-rose-500 rounded-xl dark:hover:bg-neutral-700 hover:bg-neutral-200 ">
                            <LogOutIcon className="w-3 h-3" />
                            Sign out
                        </Button>
                    </form>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>

    )
}
