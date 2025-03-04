"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="*:rounded-full ">
      {theme?.length !== 5 ?
        <Button onClick={() => setTheme("light")} variant={"ghost"} size={"icon"}>
          <Sun className="w-2 h-2" />
        </Button>
        :
        <Button onClick={() => setTheme("dark")} variant={"ghost"} size={"icon"}>
          <Moon className="w-2 h-2" />
        </Button>
      }

    </div>
  )
}
