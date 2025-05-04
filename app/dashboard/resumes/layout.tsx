import { Button } from "@/components/ui/button"
import { Plus, FileText, Settings, LayoutDashboard } from "lucide-react"

export default function ResumesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-950">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-gray-900 border-r border-gray-800 p-6">
        <nav className="w-full">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-1">Currículo App</h2>
            <p className="text-sm text-gray-400">Gerencie seus currículos</p>
          </div>
          <ul className="space-y-3">
            <li>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                <FileText className="mr-2 h-4 w-4" />
                Currículos
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </Button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-950 p-6">
        <div className="">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">Meus Currículos</h1>
            <p className="text-gray-400 mt-1">Gerencie e crie seus currículos profissionais</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add New Card */}
            <div className="group border-2 border-dashed border-gray-700 hover:border-blue-500 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-900/50 transition-all cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-gray-800 group-hover:bg-blue-500/20 flex items-center justify-center mb-4 transition-colors">
                <Plus className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
              </div>
              <h3 className="text-gray-300 group-hover:text-blue-500 font-medium">Criar Novo Currículo</h3>
              <p className="text-gray-500 text-sm text-center mt-2">Clique para adicionar um novo modelo</p>
            </div>
            
            {/* Content Area */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
