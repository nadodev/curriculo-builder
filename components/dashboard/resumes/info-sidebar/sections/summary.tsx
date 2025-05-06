import { Titulo } from "@/components/titulo";
import { Editor } from "@/components/ui/editor";
import { Controller, useFormContext } from "react-hook-form";

export function Summary() {

    const { control } = useFormContext();

    return (
        <div className="w-full h-full px-4 py-2">
            <Titulo
                title="Sobre você"
                description="Resumo"
            />

            <Controller
                control={control}
                name="summary"
                render={({ field }) => (
                   <Editor
                    content={field.value}
                    onChange={field.onChange}
                   />
                )}
            />
         
        </div>
    )
}
