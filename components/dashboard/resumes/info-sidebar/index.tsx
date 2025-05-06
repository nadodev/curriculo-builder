import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AiGenerate } from "../ai-generate";
import { Separator } from "@/components/ui/separator";
import { Titulo } from "@/components/titulo";
import { Summary } from "./sections/summary";
import { FormInfo } from "./sections/form-info";

export function InfoSidebar() {
    return (
        <aside className="w-full h-full bg-gray-50 dark:bg-gray-800">
            <div className="w-full flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-2">
                    <Link href="/dashboard/resumes">
                        <h1 className="text-2xl font-bold">Logo</h1>
                    </Link>
                </div>
                <AiGenerate />
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-4 py-2">
                    <Button variant="outline" className="cursor-pointer gap-2 text-xs px-2.5 py-1 h-9">
                        <ArrowLeft className="w-4 h-4" />
                        <p>Back</p>
                    </Button>
                    <p className="text-sm font-medium px-4 py-2">
                        Titulo do Curriculo
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
                <Titulo
                    title="Resume"
                    description="Resume"
                />
            </div>
            <div className="w-full flex items-center justify-between px-4 mb-6">
                <FormInfo />
            </div>
                <Separator />
                <Summary />
        </aside>
    )
}
