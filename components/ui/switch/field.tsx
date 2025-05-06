import { ComponentProps } from "react"
import { Controller, useFormContext, UseFormReturn } from "react-hook-form"
import { Switch } from "."
import { FormControl, FormItem, FormLabel } from "../form"


type InputFieldProps = {
    label: string
    name: string
}
export const SwitchField = ({label, name, ...props}: InputFieldProps) => {

    const {control} = useFormContext();

   return (
    <Controller
        control={control}
        name={name}
        render={({field}) => (
            
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Switch {...props} 
                    checked={field.value} 
                    onCheckedChange={field.onChange} />
                </FormControl>
            </FormItem>
        )}  
    />
   ) 
}