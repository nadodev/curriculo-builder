type ResumeData = {
    content: ResumeContentData
   // structure: ResumeStructureData

}

type ResumeContentData = {
    image: ResumeImageData
    infos: ResumeInfosData
}

type ResumeImageData = {
    url: string
    visible: boolean
}

type ResumeInfosData = {
    fullName: string
    headline: string
    email: string
    website: string
    phone: string
    location: string
}

type ResumeStructureData = {
    sections: ResumeSectionData[]
}



