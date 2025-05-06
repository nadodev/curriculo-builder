import { FileText, LayoutDashboard, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Titulo } from "../titulo";
import { cn } from "@/lib/utils";

interface NavItemsProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  active: boolean;
  className?: string;
  variant?: "default" | "ghost";
}

export function NavItems({ title, icon, href, active, className, variant = "default" }: NavItemsProps) {
  return (
    <li>
      <Button variant={variant}
        className={cn("cursor-pointer w-full justify-start bg-transparent border border-gray-800 border-gray-200 text-gray-300 text-gray-700 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-800", className, active && "dark:bg-gray-200 dark:text-gray-900 bg-gray-800 text-white")}
      >
        {icon}
        {title}
      </Button>
    </li>
  );
}
