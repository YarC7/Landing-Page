import { Languages, Moon, User } from "lucide-react";
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
const PopOver = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <User className="cursor-pointer"/>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <LogoutButton />

        {/* <div className="grid gap-4">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Moon className="w-8 h-8" />
              <Switch id="darkmode" />
            </div>
          </div>
          </div> */}
      </PopoverContent>
    </Popover>
  )
}

export default PopOver;
