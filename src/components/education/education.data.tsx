import { IconCertificate, IconSchool } from "@tabler/icons-react"
import { ReactElement } from "react"

export interface EducationItemData {
    order: number
    name: string
    icon: ReactElement | null
    cert: string
    description: ReactElement | string
    isLocalFile: boolean
}

export const EducationData: EducationItemData[] = [
    {
        order: 1,
        name: 'Ingeniería informática',
        icon: <IconSchool />,
        cert: '/certs/CertificadoTitulo.pdf',
        description: 'Universidad Tecnologíca de Chile INACAP (2008-2012)',
        isLocalFile: true
    },
    {
        order: 3,
        name: 'React: De cero a experto',
        icon: <IconCertificate />,
        cert: '',
        description: 'Dev/talles (en curso)',
        isLocalFile: false
    },
    {
        order: 4,
        name: 'DevOps Essentials',
        icon: <IconCertificate />,
        cert: '',
        description: 'ITCert (En curso)',
        isLocalFile: false
    },
    {
        order: 2,
        name: 'Power BI',
        icon: <IconCertificate />,
        cert: 'https://cajalosandes.virtual-labx.cl/certificates/cc0799895aa54164a36fea32c5dfc329',
        description: 'Virtual LabX - Universidad de Chile (2022)',
        isLocalFile: false
    },
    {
        order: 5,
        name: 'NodeJS App y Servicios',
        icon: <IconCertificate />,
        cert: '/certs/nodejs-software-development.pdf',
        description: 'Formacion TI (FTI) (2023)',
        isLocalFile: true
    },
    {
        order: 6,
        name: 'Desarrollo Backend Essentials',
        icon: <IconCertificate />,
        cert: '',
        description: 'Virtual LabX - Universidad de Chile (en curso)',
        isLocalFile: false
    },
    {
        order: 7,
        name: 'Desarrollo Frontend Essentials',
        icon: <IconCertificate />,
        cert: '',
        description: 'Virtual LabX - Universidad de Chile (en curso)',
        isLocalFile: false
    },
    {
        order: 8,
        name: 'Diseño UX Essentials',
        icon: <IconCertificate />,
        cert: '',
        description: 'Virtual LabX - Universidad de Chile (en curso)',
        isLocalFile: false
    },
    {
        order: 9,
        name: 'Curso de Innovación tecnologica aplicada a los seguros',
        icon: <IconCertificate />,
        cert: '',
        description: 'Escuela de Seguros - 2025',
        isLocalFile: false
    }

]