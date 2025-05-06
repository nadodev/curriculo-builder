"use client"
import { CardResumes } from "@/components/dashboard/card-resumes";
import { DialogCardCurriculo } from "@/components/DialogCardCurriculo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { InputField } from "@/components/ui/input/field";

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Email inválido.",
  }),
  telefone: z.string().min(10, {
    message: "Telefone deve ter pelo menos 10 dígitos.",
  }),
});

type Resume = {
  title: string;
  description: string;
  updatedAt: string;
};

export default function ResumesPage() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const newResume: Resume = {
      title: data.nome,
      description: `Email: ${data.email} | Telefone: ${data.telefone}`,
      updatedAt: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
    };
    setResumes([...resumes, newResume]);
    console.log(newResume);
    form.reset();
    setIsDialogOpen(false);
  };

  return (
    <div className=" mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <div className="h-[230px] w-full w-max-[350px] group border-2 border-dashed border-gray-300 dark:border-gray-200 hover:border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center dark:bg-gray-900 dark:border-gray-800 bg-gray-50 dark:hover:bg-gray-900/50 transition-all cursor-pointer">
          <h3 className="dark:text-gray-300 text-gray-900 group-hover:text-blue-500 font-medium mb-4">Criar Novo Currículo</h3>
          <DialogCardCurriculo
            open={isDialogOpen}
            onOpenChange={setIsDialogOpen}
            title="Novo Currículo"
            description="Adicione as informações do currículo"
            content={
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <InputField 
                      label="Nome"
                      name="nome" 
                    />
                    <InputField label="Email" name="email" />
                    <InputField label="Telefone" name="telefone" />
                    <Button type="submit" className="w-full mt-4">Adicionar Currículo</Button>
                  </form>
                </Form>
              </div>
            }
          />
          <p className="dark:text-gray-500 text-gray-900 text-sm text-center mt-2">Clique para adicionar um novo currículo</p>
        </div>

        {resumes.map((resume, index) => (
          <CardResumes
            key={index}
            title={resume.title}
            description={resume.description}
            updatedAt={resume.updatedAt}
            onDelete={() => {
              setResumes(resumes.filter((_, i) => i !== index));
            }}
          />
        ))}
      </div>
    </div>
  );
}
