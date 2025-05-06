"use client"

import Resume from "@/components/dashboard/resumes/pages/resume"


export default function ResumePage(
    { params }: { params: { id: string } }
) {
  return (
    <Resume 
        params={params}
    />
  )
}
