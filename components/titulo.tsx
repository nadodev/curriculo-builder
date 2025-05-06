import { cn } from "@/lib/utils";

interface TituloProps {
    title: string;
    description: string;
    fontTitle?: string;
    fontDescription?: string;
}

export function Titulo({ title, description, fontTitle, fontDescription }: TituloProps) {
    return (
        <div className="mb-8">
            <h1 className={cn("text-2xl font-bold dark:text-white text-gray-900", fontTitle)}>{title}</h1>
            <p className={cn("text-gray-400 dark:text-gray-100 mt-1", fontDescription)}>{description}</p>
        </div>
    );
}
