export interface WorkExperienceInterface {
    order: number
    brand: string
    position: string
    period: string
    details: string
}

export const WorkExperienceData: WorkExperienceInterface[] = [
    {
        order: 1,
        brand: 'MAPFRE Seguros',
        position: 'Analista de soluciones tecnologícas',
        period: '2022 - actualidad',
        details: 'Especialista desarrollador de aplicaciones web y aplicaciones para el backend de MAPFRE Seguros Chile, entregando soluciones a las distintas aplicaciones y plataformas que integran la empresa. Como su gestor documental, aplicaciones de integración con la superintendencia y otras compañías. como también participando en proyectos web para la venta de seguros de vida y vehículos.'
    },
    {
        order: 2,
        brand: 'FLSmith',
        position: 'IT Business System Analist',
        period: '2022',
        details: 'Analista de datos para proyectos que requieran la creación de reportes Power BI usando DataLake desde Snowflake.'
    },
    {
        order: 3,
        brand: 'Zurich Seguros de vida',
        position: 'Analista BI, desarrollador semi-senior',
        period: '2018-2022',
        details: 'Especialista desarrollador de aplicaciones web y aplicaciones para el backend de MAPFRE Seguros Chile, entregando soluciones a las distintas aplicaciones y plataformas que integran la empresa. Como su gestor documental, aplicaciones de integración con la superintendencia y otras compañías. como también participando en proyectos web para la venta de seguros de vida y vehículos.'
    },
    {
        order: 4,
        brand: 'Euroamerica Seguros de vida',
        position: 'Analista desarrollador',
        period: '2016-2018',
        details: 'Especialista desarrollador de aplicaciones web y aplicaciones para el backend de MAPFRE Seguros Chile, entregando soluciones a las distintas aplicaciones y plataformas que integran la empresa. Como su gestor documental, aplicaciones de integración con la superintendencia y otras compañías. como también participando en proyectos web para la venta de seguros de vida y vehículos.'
    },
    {
        order: 5,
        brand: 'Nexo-IT Consultores',
        position: 'Analista desarrollador',
        period: '2014-2016',
        details: 'Desarrollador de aplicaciones web y escritorio, para diversos clientes asociados, logrando adquirir conocimientos de integración de datos a traves de ETL (MS SQL Integration Services).'
    },
    {
        order: 6,
        brand: 'BPM Consultancy',
        position: 'Consultor de proyectos',
        period: '2013-2014',
        details: 'Consultor de proyectos BPM, encargado del analisis y desarrollo de aplicaciones web y servicios de integración desde softwares y base de datos propias de los clientes hacia servicios BPMS (Auraportal).'
    }
]