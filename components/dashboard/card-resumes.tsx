"use client"
import { Calendar, FileText, MoreVertical, Plus, Trash2, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { truncate } from "@/lib/truncate";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CardResumesProps {
    title?: string;
    description?: string;
    updatedAt?: string|undefined;
    onDelete?: () => void;
}

export function CardResumes({ title, description, updatedAt, onDelete }: CardResumesProps) {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col justify-between w-full w-max-[350px] h-[230px] dark:bg-gray-900 bg-gray-50 border dark:border-gray-800 border-gray-300 rounded-xl p-4 hover:ring-1 hover:ring-gray-700 transition-all">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-blue-500" />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-800 text-gray-400 hover:text-white">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem 
                                    className="cursor-pointer"
                                    onClick={() => window.open(`/dashboard/resumes/${title}`)}
                                >
                                    <Eye className="mr-2 h-4 w-4" />
                                    Ver Currículo
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                    className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/20"
                                    onClick={onDelete}
                                >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Excluir
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <h3 className="text-lg font-medium dark:text-white text-gray-900 mb-2 line-clamp-2">{truncate(title || '', 20)}</h3>
                    <p className="text-gray-400 dark:text-gray-100 text-sm mb-4 line-clamp-3">{truncate(description || '', 90)}</p>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-100 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="line-clamp-1">Atualizado em {updatedAt}</span>
                </div>
            </div>
        </div>
    );
}
