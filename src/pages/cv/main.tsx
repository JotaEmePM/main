import { IconArticle, IconAward, IconBrandAngular, IconBrandAws, IconBrandAzure, IconBrandBootstrap, IconBrandCSharp, IconBrandDocker, IconBrandGit, IconBrandGithub, IconBrandLinkedin, IconBrandMongodb, IconBrandPython, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconBrandWhatsapp, IconBriefcase, IconCat, IconCertificate, IconChartBar, IconChartLine, IconHelpHexagon, IconId, IconInfoSquareRounded, IconLanguage, IconMail, IconSchool, IconSql } from "@tabler/icons-react"
import { ScoreDots } from "../../components/score/score-dots"
import { Skill } from "../../components/skill/Skill"
import { NetFrameworkSkillDetail } from "../../components/skill/skills-descriptions/NetFrameworkSkillDetail"
import { WorkExperienceSection } from "../../components/work-exp/WorkExperienceSection"
import { EducationSection } from "../../components/education/EducationSection"
import { PortfolioSection } from "../../components/portfolio/PortFolioSection"


export const CVPage = () => {
  return (<>
    <div className='flex flex-col sm:flex-row relative pt-4'>
          {/* CARD */}
          <main className='md:w-1/3 w-100 flex flex-col items-center py-2'>
            <section
              id='card'
              className='w-[300px] flex flex-col rounded-md text-center overflow-hidden border shadow dark:bg-slate-700 dark:border-slate-700'
            >
              <div className='w-full h-[250px] border-inherit overflow-hidden'>
                {/* <img className='w-full h-full object-cover' src='./images/jotaemepm.jpg' alt="José Miguel Perez"></img> */}
                <img
                  className='w-full h-full object-cover dark:bg-slate-700'
                  src='https://placehold.co/250x250'
                  alt='José Miguel Pérez'
                />
              </div>
              <div className='px-[24px] py-[16px] bg-slate-100 dark:bg-slate-700 '>
                <h2 className='text-[26px] mb-[4px] profile-name text-black dark:text-slate-100'>
                  José Miguel Pérez Méndez
                </h2>
                <p className='text-[12px] job-title uppercase mb-[20px] text-black/50 dark:text-slate-400'>
                  Desarrollador
                </p>
                <p className='text-[14px] description text-black/80 dark:text-slate-300'>
                  Desarrollador de aplicaciones, backend, frontend y proyectos
                  de data engineering{' '}
                </p>
              </div>
              <div className='w-100 flex h-100 border-t border-t-blines justify-center social-links bg-slate-100 pt-3 dark:bg-slate-700 dark:border-t-slate-600'>
                <a
                  title='LinkedIn'
                  rel='noopener'
                  href='https://www.linkedin.com/in/perezmjosem/'
                  target='_blank'
                  className='font-[20px]'
                >
                  <IconBrandLinkedin
                    size={48}
                    color='currentColor'
                    stroke={2}
                    className='text-linkedin'
                  />
                  &nbsp;
                </a>
                <a
                  title='LinkedIn'
                  rel='noopener'
                  href='https://www.github.com/jotaemepm/'
                  target='_blank'
                  className='font-[20px]'
                >
                  <IconBrandGithub
                    size={48}
                    color='currentColor'
                    stroke={2}
                    className='text-github-white'
                  />
                  &nbsp;
                </a>
                <a
                  title='Email'
                  rel='noopener'
                  href='mailto:perezmjosem@gmail.com'
                  target='_blank'
                  className='font-[20px]'
                >
                  <IconMail
                    size={48}
                    color='currentColor'
                    stroke={2}
                    className='text-red-500'
                  />
                  &nbsp;
                </a>
                <a
                  title='Blog'
                  rel='noopener'
                  href='https://blog.jotaemepm.dev'
                  className='font-[20px]'
                >
                  <IconArticle
                    size={48}
                    color='currentColor'
                    stroke={2}
                    className='text-blog'
                  />
                  &nbsp;
                </a>
                <a
                  title='Blog'
                  rel='noopener'
                  href='https://api.whatsapp.com/send?phone=56963681312&text=Hola%20Jose%20vi%20tu%20portafolio'
                  className='font-[20px]'
                >
                  <IconBrandWhatsapp
                    size={48}
                    color='currentColor'
                    stroke={2}
                    className='text-whatsapp'
                  />
                  &nbsp;
                </a>
              </div>
            </section>
          </main>
          <section className='md:w-2/3 w-100 mt-3 flex flex-col justify-center items-center py-2 mx-4 '>
            {/* <section className='flex flex-col items-center justify-center bg-slate-100 rounded border shadow p-2 w-full'>
                <BlogNews />
              </section> */}
            <section className='flex flex-col  bg-slate-100 dark:bg-slate-700  rounded border dark:border-slate-500 shadow p-4 w-full'>
              <header className='flex gap-2'>
                <IconInfoSquareRounded />
                <h4 className='text-xl text-gray-900 dark:text-slate-300 font-bold '>Sobre mí</h4>
              </header>
              <p className='mt-2 text-black dark:text-slate-100'>
                Soy Ingeniero en Informática con experiencia tanto en
                desarrollo de software como en data engineering. A lo largo de
                mi carrera, he adquirido habilidades para analizar, planificar
                e implementar proyectos, empleando diversas tecnologías para
                la integración de sistemas internos y externos, bajo
                metodologías ágiles. Mi enfoque se ha centrado en el trabajo
                colaborativo, destacando por mi capacidad para desempeñarme
                eficazmente en equipos y mantenerme sereno bajo presión.
              </p>
              <p className='mt-2 text-black dark:text-slate-100'>

                Me apasiona la tecnología, especialmente el desarrollo de IoT
                y la impresión 3D.
              </p>
            </section>
            <section className='flex flex-col bg-slate-100 dark:bg-slate-700  rounded border dark:border-slate-500 shadow p-2 w-full mt-2'>
              <div className='flex flex-col md:flex-row'>
                <div className='basis-1/2 m-3'>
                  <header className='flex gap-2'>
                    <IconId />
                    <h4 className='text-xl text-gray-900 dark:text-slate-300 font-bold '>
                      Información personal
                    </h4>
                  </header>
                  <ul className='mt-2 text-gray-700'>
                    <li className='flex border-y py-2 dark:border-t-slate-400'>
                      <span className='font-bold w-24 text-black dark:text-slate-100'>Nombre:</span>
                      <span className='text-gray-700 dark:text-slate-100'>
                        José Miguel Pérez Méndez
                      </span>
                    </li>
                    <li className='flex border-y dark:border-t-slate-400 py-2'>
                      <span className='font-bold w-24 text-black dark:text-slate-100'>Ciudad:</span>
                      <span className='text-gray-700 dark:text-slate-100'>
                        Rancagua, VI Región
                      </span>
                    </li>
                    <li className='flex border-y dark:border-t-slate-400 py-2'>
                      <span className='font-bold w-24 text-black dark:text-slate-100'>Email:</span>
                      <span className='text-gray-700 dark:text-slate-100'>
                        perezmjosem@gmail.com
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='basis-1/2 mt-4 md:ml-3'>
                  <header className='flex gap-2'>
                    <IconLanguage />
                    <h4 className='text-xl text-gray-900 dark:text-slate-300 font-bold '>
                      Idiomas
                    </h4>
                  </header>
                  <ul className='mt-2 text-gray-700'>
                    <li className='flex border-y py-2'>
                      <span className='font-bold w-24 text-black dark:text-slate-100'>Español:</span>
                      <span className='text-gray-700 flex flex-row'>
                        <ScoreDots filledItems={10} unfilledItems={0} />
                      </span>
                      {/* <p className="text-gray-700 ml-2 invisible md:visible">Nativo</p> */}
                    </li>
                    <li className='flex border-y py-2'>
                      <span className='font-bold w-24 text-black dark:text-slate-100'>Ingles:</span>
                      <span className='text-gray-700 flex flex-row'>
                        <ScoreDots filledItems={2} unfilledItems={4} />
                      </span>
                      {/* <p className="text-gray-700 ml-2 invisible md:visible">No evaluado</p> */}
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className='flex flex-col bg-slate-100 dark:bg-slate-700  rounded border dark:border-slate-500 shadow p-2 w-full mt-2'>
              <div className='basis-1 md:ml-3'>
                <header className='flex gap-2'>
                  <IconChartLine />
                  <h4 className='text-xl text-gray-900 dark:text-slate-300 font-bold'>
                    Aptitudes
                  </h4>
                </header>

                {/* <ul>
                    <li>Lenguajes</li>
                    <li>Herramientas</li>
                    <li>Base de datos</li>
                    <li>Otros</li>
                  </ul> */}
                <p className='mt-2 text-base text-gray-600 dark:text-slate-200 flex '>
                  Pudes hacer click en el icono de  <IconHelpHexagon size="24" /> para ver más detalles, logros o experiencia.
                </p>
                <h4 className='font-medium text-sm mr-auto text-gray-700 dark:text-slate-300 border-b mt-4'>
                  Tecnologías y lenguajes
                </h4>
                <section className='grid grid-cols-2 md:grid-cols-3 gap-x-6'>
                  <Skill
                    icon={<IconBrandCSharp />}
                    title='.Net y .NetFramework'
                    content={<NetFrameworkSkillDetail />}
                  />
                  <Skill
                    icon={<IconBrandTypescript />}
                    title='Javascript y Typescript'
                    content='texto de prueba'
                  />

                  <Skill
                    icon={<IconBrandAngular />}
                    title='Angular'
                    content='texto de prueba'
                  />
                  <Skill
                    icon={<IconBrandReact />}
                    title='React'
                    content='texto de prueba'
                  />
                  <Skill
                    icon={<IconCat />}
                    title='NestJS'
                    content=''
                  />
                  <Skill
                    icon={<IconBrandAzure />}
                    title='Azure'
                    content=''
                  />
                  <Skill
                    icon={<IconBrandAws />}
                    title='AWS'
                    content=''
                  />
                  <Skill
                    icon={<IconBrandPython />}
                    title='Python'
                    content=''
                  />
                  <Skill
                    icon={<IconBrandTailwind />}
                    title='TailwindCSS'
                    content=''
                  />
                  <Skill
                    icon={<IconBrandBootstrap />}
                    title='Boostrap'
                    content=''
                  />
                </section>
                <h4 className='font-medium text-sm mr-auto text-gray-700 dark:text-slate-300 border-b mt-4'>
                  Base de datos
                </h4>
                <section className='grid grid-cols-2 md:grid-cols-3 gap-x-6'>
                  <Skill
                    icon={<IconSql />}
                    title='MS SQL Server & Services'
                    content='texto de prueba'
                  />
                  <Skill
                    icon={<IconBrandMongodb />}
                    title='MongoDB'
                    content=''
                  />
                  <Skill
                    icon={<IconSql />}
                    title='Oracle'
                    content=''
                  />
                </section>
                <h4 className='font-medium text-sm mr-auto text-gray-700 dark:text-slate-300 border-b mt-4'>
                  Herramientas
                </h4>
                <section className='grid grid-cols-2 md:grid-cols-3 gap-x-6'>
                  <Skill
                    icon={<IconBrandDocker />}
                    title='Docker'
                    content='texto de prueba'
                  />
                  <Skill
                    icon={<IconChartBar />}
                    title='Power BI'
                    content='texto de prueba'
                  />
                  <Skill icon={<IconBrandGit />} title='Git' content='' />
                </section>
                <h4 className='font-medium text-sm mr-auto text-gray-700 dark:text-slate-300 border-b mt-4'>
                  Personales
                </h4>
                <section className='grid grid-cols-2 md:grid-cols-3 gap-x-6'>
                  <Skill
                    icon={<IconAward />}
                    title='Colaboración'
                    content=""
                  />
                  <Skill
                    icon={<IconAward />}
                    title='Comunicación'
                    content=""
                  />
                  <Skill
                    icon={<IconAward />}
                    title='Autodidacta'
                    content=""
                  />
                  <Skill
                    icon={<IconAward />}
                    title='Pensamiento critico'
                    content=""
                  />
                  <Skill
                    icon={<IconAward />}
                    title='Adaptibilidad'
                    content=""
                  />
                  <Skill
                    icon={<IconAward />}
                    title='Capacidad de manejar la presión'
                    content=""
                  />
                </section>
              </div>
            </section>
            <section className='flex flex-col bg-slate-100 dark:bg-slate-700  rounded border dark:border-slate-500 shadow p-2 w-full mt-2'>
              <div className='basis-1 md:ml-3'>
                <header className='flex gap-2'>
                  <IconBriefcase />
                  <h4 className='text-xl text-gray-900 dark:text-slate-300 font-bold'>
                    Experiencia laboral
                  </h4>
                </header>
                <div className='flex px-8 mt-4'>
                  <div className='space-y-6 border-l-2 border-dashed mb-2'>
                    <WorkExperienceSection />
                  </div>
                </div>
              </div>
            </section>
            <section className='flex flex-col bg-slate-100 dark:bg-slate-700  rounded border dark:border-slate-500 shadow p-2 w-full mt-2'>
              <div className='basis-1 md:ml-3'>
                <header className='flex gap-2'>
                  <IconSchool />
                  <h4 className='text-xl text-gray-900 dark:text-slate-300 font-bold'>
                    Educación
                  </h4>
                </header>
                {/*  */}
                <div className='w-full lef-0 rounded max-h-select overflow-y-auto mt-4'>
                  <div className='flex flex-col w-full'>
                    <div className='w-full border-gray-100 rounded-t border-b'>
                      <EducationSection />
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </section>
            <section className='flex flex-col bg-slate-100 dark:bg-slate-700  rounded border dark:border-slate-500 shadow p-2 w-full mt-2'>
              <div className='basis-1 md:ml-3'>
                <header className='flex gap-2'>
                  <IconCertificate />
                  <h4 className='text-xl text-gray-900 dark:text-slate-300 font-bold'>
                    Portfolio
                  </h4>
                </header>
                <p className='mt-2 text-base text-gray-600 dark:text-slate-300'>
                  Aquí puedes encontrar algunos de mis proyectos publicos. Puedes seleccionar uno para ver más información.
                </p>
                <PortfolioSection />
                {/* <PortfolioItem image="" title="Blog" description="Blog desarrollado para mi portafolio" subdescription="[React, MongoDB, Expres(API)]" url="https://blog.jotaemepm.dev" />
                <PortfolioItem image="" title="Vinyl Store" description="Tienda de vinilos" subdescription="[React, MongoDB, Expres(API)]" url="https://blog.jotaemepm.dev" />
                <PortfolioItem image="" title="CV" description="Portafolio web" subdescription="[React,Tailwindcss, Vercel]" url="https://jotaemepm.dev" /> */}


              </div>
            </section>
          </section>
        </div >
  </>)
}