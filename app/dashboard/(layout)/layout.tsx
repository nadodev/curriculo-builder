"use client"

import { CardResumes } from "@/components/dashboard/card-resumes";
import { Nav } from "@/components/dashboard/nav";
import { NavItems } from "@/components/dashboard/nav-items";
import { Titulo } from "@/components/titulo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, FileText, LogOut, Settings, User } from "lucide-react";
import { useTheme } from "next-themes";

export default function ResumesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="flex flex-col gap-4 hidden md:flex w-64 border-r p-4 justify-between">
        <div>
          <Titulo
            title="Currículo App"
            description="Gerencie seus currículos"
            fontTitle="text-1xl font-bold"
            fontDescription="text-sm text-muted-foreground"
          />
          <Nav />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="px-2 w-full flex items-center gap-2 cursor-pointer hover:bg-accent">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-sm font-medium flex items-center">
                  João da Silva
                  <ChevronDown className="h-4 w-4 ml-2" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? (
                  <>
                    <span className="mr-2">☀️</span> Modo Claro
                  </>
                ) : (
                  <>
                    <span className="mr-2">🌙</span> Modo Escuro
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <div className="">
          <Titulo 
            title="Meus Currículos" 
            description="Gerencie e crie seus currículos profissionais" 
          />
          <div className="">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
