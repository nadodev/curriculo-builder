import { InputField } from "@/components/ui/input/field";
import { SwitchField } from "@/components/ui/switch/field";

export function FormInfo() {
    return (
        <div className="flex flex-col items-center gap-2 w-full space-y-4">
        <div className="flex items-center gap-2 w-full">
            <InputField
                label="URL"
                placeholder="https://..."
                name="content.image.url"
                className="w-full"
            />
            <SwitchField
                label="URL"
                name="content.image.visible"
            />
        </div>
        <div className="flex items-center gap-2 w-full">
            <InputField
                label="Nome Completo"
                placeholder="Nome Completo"
                name="content.infos.fullName"
                className="w-full"
            />
            <InputField
                label="Cargo"
                placeholder="Cargo"
                name="content.infos.headline"
                className="w-full"
            />
        </div>
        <div className="flex items-center gap-2 w-full">
            <InputField
                label="Email"
                placeholder="Email"
                name="content.infos.email"
                className="w-full"
            />
            <InputField
                label="Telefone"
                placeholder="Telefone"
                name="content.infos.phone"
                className="w-full"
            />
        </div>

        <div className="flex items-center gap-2 w-full">
            <InputField
                label="Localização"
                placeholder="Localização"
                name="content.infos.location"
                className="w-full"
            />

            <InputField
                label="Website"
                placeholder="Website"
                name="content.infos.website"
                className="w-full"
            />
        </div>


    </div>
    )
}
