import { ComponentProps } from "react"
import { Controller, useFormContext, UseFormReturn } from "react-hook-form"
import { Input } from "."
import { FormControl, FormItem, FormLabel } from "../form"


type InputFieldProps = ComponentProps<typeof Input> & {
    label: string
    name: string
}
export const InputField = ({label, name, ...props}: InputFieldProps) => {

    const {control} = useFormContext();

   return (
    <Controller
        control={control}
        name={name}
        render={({field}) => (
            <FormItem className="w-full">
                <FormLabel className="flex-1">{label}</FormLabel>
                <FormControl>
                    <Input {...field} {...props} />
                </FormControl>
            </FormItem>
        )}  
    />
   ) 
}