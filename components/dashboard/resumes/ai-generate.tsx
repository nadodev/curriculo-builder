import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function AiGenerate() {
    return (
        <Button variant="outline" className="cursor-pointer gap-2 text-xs px-2.5 py-1 h-9">
            <Sparkles className="w-4 h-4" />
            <p>Ai Generate</p>
        </Button>
    )
}
