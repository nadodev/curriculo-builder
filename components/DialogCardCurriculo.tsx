"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { MoreVertical, Plus } from "lucide-react"

interface DialogComponentProps {
    title: string;
    description: string;
    content: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function DialogCardCurriculo({ title, description, content, open, onOpenChange }: DialogComponentProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <div className="h-12 w-12 rounded-full bg-gray-800 group-hover:bg-blue-500/20 flex items-center justify-center mb-4 transition-colors">
                    <Plus className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-medium dark:text-white text-gray-900">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="dark:text-gray-100 text-gray-900">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {content}
            </DialogContent>
        </Dialog>
    )
}
