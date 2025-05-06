import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Edit, Printer } from "lucide-react";
import Link from "next/link";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { InfoSidebar } from "../info-sidebar";
import { ResumeContent } from "../resume-content";
import { StructureSidebar } from "../structure-sidebar";
import { FormProvider, useForm } from "react-hook-form";

export default function Resume({ params }: { params: { id: string } }) {

  const defaultValues: ResumeData = {
    content: {
      image: {
        url: "",
        visible: true,
      },
      infos: {
        location: "",
        fullName: "",
        headline: "",
        email: "",
        website: "",
        phone: "",
      },
    },
  };
  const methods = useForm<ResumeData>({defaultValues});

  return (
    <FormProvider {...methods}>
      <div className="w-full h-screen overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
          <InfoSidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        
        
        <ResizablePanel >
          <ResumeContent />
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
          <StructureSidebar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
    </FormProvider>
  )
}
