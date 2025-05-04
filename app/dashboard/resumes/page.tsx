import { Button } from "@/components/ui/button";
import { FileText, MoreVertical, Calendar } from "lucide-react";

export default function ResumesPage() {
  return (
    <>
      {/* Sample Resume Cards */}
      <div className="bg-gray-900 rounded-xl p-6 hover:ring-1 hover:ring-gray-700 transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
            <FileText className="h-5 w-5 text-blue-500" />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        <h3 className="text-lg font-medium text-white mb-2">Desenvolvedor Frontend</h3>
        <p className="text-gray-400 text-sm mb-4">Currículo focado em desenvolvimento web e experiência com React.</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-2" />
          Atualizado em 20 Mar 2024
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl p-6 hover:ring-1 hover:ring-gray-700 transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
            <FileText className="h-5 w-5 text-purple-500" />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        <h3 className="text-lg font-medium text-white mb-2">UX Designer</h3>
        <p className="text-gray-400 text-sm mb-4">Currículo especializado em design de interfaces e experiência do usuário.</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-2" />
          Atualizado em 15 Mar 2024
        </div>
      </div>
    </>
  );
}
