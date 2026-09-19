import Image from "next/image";
<<<<<<< HEAD
import logo from "../public/assets/pstuto.png";
=======
import logo from "@/assets/lws_logo.svg";
>>>>>>> e91ba32ab3eff57e67522236bc9ef6997d91c97e
import { cn } from "@/lib/utils";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[100px]", className)} src={logo} alt="logo" />
  );
};
