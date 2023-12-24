import { IconArticle, IconBrandAngular, IconBrandCSharp, IconBrandDocker, IconBrandGit, IconBrandGithub, IconBrandLinkedin, IconBrandMongodb, IconBrandPython, IconBrandReact, IconBrandTypescript, IconBriefcase, IconCertificate, IconChartBar, IconChartLine, IconId, IconInfoSquareRounded, IconLanguage, IconMail, IconSchool, IconSql } from "@tabler/icons-react"
import { ScoreDots } from "../../components/score/score-dots"
import { Skill } from "../../components/skill/Skill"
import { NetFrameworkSkillDetail } from "../../components/skill/skills-descriptions/NetFrameworkSkillDetail"
import { WorkExperienceItem } from "../../components/work-exp/WorkExperienceItem"
import { EducationItem } from "../../components/education/EducationItem"
import { PortfolioItem } from "../../components/portfolio/PortfolioItem"

export const CVPage = () => {
  return (<>
    <div className='flex flex-col sm:flex-row relative pt-4 text-black font-lato'>
      {/* CARD */}
      <main className='md:w-1/3 w-100 flex flex-col items-center py-2'>
        <section
          id='card'
          className='w-[300px] blue-letter flex flex-col rounded-md text-center overflow-hidden border shadow'
        >
          <div className='w-full h-[250px] border-inherit overflow-hidden'>
            {/* <img className='w-full h-full object-cover' src='./images/jotaemepm.jpg' alt="José Miguel Perez"></img> */}
            <img
              className='w-full h-full object-cover'
              src='https://placehold.co/250x250'
              alt='José Miguel Pérez'
            />
          </div>
          <div className='px-[24px] py-[16px] bg-slate-100 '>
            <h2 className='text-[26px] mb-[4px] profile-name font-mplus'>
              José Miguel Pérez Méndez
            </h2>
            <p className='text-[12px] job-title uppercase mb-[20px]'>
              Desarrollador
            </p>
            <p className='text-[14px] description'>
              Desarrollador de aplicaciones, backend, frontend y proyectos
              de data engineering{' '}
            </p>
          </div>
          <div className='w-100 flex h-100 border-t border-t-blines justify-center social-links bg-slate-100 pt-3'>
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
              href='/blog'
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
          </div>
        </section>
      </main>
      <section className='md:w-2/3 w-100 mt-3 flex flex-col justify-center items-center mx-4 '>
        {/* <section className='flex flex-col items-center justify-center bg-slate-100 rounded border shadow p-2 w-full'>
                <BlogNews />
              </section> */}
        <section className='flex flex-col  bg-slate-100  rounded border shadow p-4 w-full'>
          <header className='flex gap-2'>
            <IconInfoSquareRounded />
            <h4 className='text-xl font-bold '>Sobre mí</h4>
          </header>
          <p>
            Soy Ingeniero en Informática con experiencia tanto en
            desarrollo de software como en data engineering. A lo largo de
            mi carrera, he adquirido habilidades para analizar, planificar
            e implementar proyectos, empleando diversas tecnologías para
            la integración de sistemas internos y externos, bajo
            metodologías ágiles. Mi enfoque se ha centrado en el trabajo
            colaborativo, destacando por mi capacidad para desempeñarme
            eficazmente en equipos y mantenerme sereno bajo presión.
          </p>
          <p>
            {' '}
            Me apasiona la tecnología, especialmente el desarrollo de IoT
            y la impresión 3D.
          </p>
        </section>
        <section className='flex flex-col bg-slate-100  rounded border shadow p-2 w-full mt-2'>
          <div className='flex flex-col md:flex-row'>
            <div className='basis-1/2 m-3'>
              <header className='flex gap-2'>
                <IconId />
                <h4 className='text-xl font-bold '>
                  Información personal
                </h4>
              </header>
              <ul className='mt-2'>
                <li className='flex border-y py-2'>
                  <span className='font-bold w-24'>Nombre:</span>
                  <span className=''>
                    José Miguel Pérez Méndez
                  </span>
                </li>
                <li className='flex border-y py-2'>
                  <span className='font-bold w-24'>Ciudad:</span>
                  <span className=''>
                    Rancagua, VI Región
                  </span>
                </li>
                <li className='flex border-y py-2'>
                  <span className='font-bold w-24'>Email:</span>
                  <span className=''>
                    perezmjosem@gmail.com
                  </span>
                </li>
              </ul>
            </div>
            <div className='basis-1/2 mt-4 md:ml-3'>
              <header className='flex gap-2'>
                <IconLanguage />
                <h4 className='text-xl font-bold '>
                  Idiomas
                </h4>
              </header>
              <ul className='mt-2'>
                <li className='flex border-y py-2'>
                  <span className='font-bold w-24'>Español:</span>
                  <span className='flex flex-row'>
                    <ScoreDots filledItems={10} unfilledItems={0} />
                  </span>
                  {/* <p className="text-gray-700 ml-2 invisible md:visible">Nativo</p> */}
                </li>
                <li className='flex border-y py-2'>
                  <span className='font-bold w-24'>Ingles:</span>
                  <span className='flex flex-row'>
                    <ScoreDots filledItems={5} unfilledItems={5} />
                  </span>
                  {/* <p className="text-gray-700 ml-2 invisible md:visible">No evaluado</p> */}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='flex flex-col  bg-slate-100  rounded border shadow p-2 w-full mt-2  '>
          <div className='basis-1 md:ml-3'>
            <header className='flex gap-2'>
              <IconChartLine />
              <h4 className='text-xl font-bold '>
                Aptitudes
              </h4>
            </header>

            {/* <ul>
                    <li>Lenguajes</li>
                    <li>Herramientas</li>
                    <li>Base de datos</li>
                    <li>Otros</li>
                  </ul> */}
            <h4 className='font-medium text-sm mr-auto border-b mt-4'>
              Tecnologías
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
                icon={<IconBrandMongodb />}
                title='MongoDB'
                content='texto de prueba'
              />

              <Skill
                icon={<IconSql />}
                title='MS SQL Server & Services'
                content='texto de prueba'
              />

              <Skill
                icon={<IconBrandPython />}
                title='Python'
                content=''
              />
            </section>
            <h4 className='font-medium text-sm mr-auto border-b mt-4'>
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
          </div>
        </section>
        <section className='flex flex-col  bg-slate-100  rounded border shadow p-2 w-full mt-2  '>
          <div className='basis-1 md:ml-3'>
            <header className='flex gap-2'>
              <IconBriefcase />
              <h4 className='text-xl font-bold '>
                Experiencia laboral
              </h4>
            </header>
            <div className='flex px-8 mt-4'>
              <div className='space-y-6 border-l-2 border-dashed mb-2'>
                <WorkExperienceItem
                  brand='MAPFRE'
                  period='2022 - actualidad'
                  details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil sapiente omnis deserunt mollitia! A reprehenderit ipsam totam magni, tempore, at incidunt aliquid sed harum nesciunt asperiores aperiam provident. Dolore!'
                />
                <WorkExperienceItem
                  brand='FLSmith'
                  period='2022'
                  details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil sapiente omnis deserunt mollitia! A reprehenderit ipsam totam magni, tempore, at incidunt aliquid sed harum nesciunt asperiores aperiam provident. Dolore!'
                />
                <WorkExperienceItem
                  brand='Zurich Seguros de vida'
                  period='2018-2022'
                  details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil sapiente omnis deserunt mollitia! A reprehenderit ipsam totam magni, tempore, at incidunt aliquid sed harum nesciunt asperiores aperiam provident. Dolore!'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col  bg-slate-100  rounded border shadow p-2 w-full mt-2  '>
          <div className='basis-1 md:ml-3'>
            <header className='flex gap-2'>
              <IconSchool />
              <h4 className='text-xl font-bold '>
                Educación
              </h4>
            </header>
            {/*  */}
            <div className='w-full lef-0 rounded max-h-select overflow-y-auto mt-4'>
              <div className='flex flex-col w-full'>
                <div className='w-full border-gray-100 rounded-t border-b'>
                  <EducationItem
                    name='Ingeniería informática'
                    description='Universidad Tecnologíca de Chile INACAP (2008-2012)'
                    icon={<IconSchool />}
                  />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        <section className='flex flex-col  bg-slate-100  rounded border shadow p-2 w-full mt-2  '>
          <div className='basis-1 md:ml-3'>
            <header className='flex gap-2'>
              <IconCertificate />
              <h4 className='text-xl font-bold '>
                Portfolio
              </h4>
            </header>
            <p className='mt-2 text-base'>
              Aquí puedes encontrar algunos de mis proyectos publicos. Puedes seleccionar uno para ver más información.
            </p>

            <PortfolioItem image="" title="Blog" description="Blog desarrollado para mi portafolio" subdescription="[React, MongoDB, Expres(API)]" url="https://blog.jotaemepm.dev" />
            <PortfolioItem image="" title="Vinyl Store" description="Tienda de vinilos" subdescription="[React, MongoDB, Expres(API)]" url="https://blog.jotaemepm.dev" />
            <PortfolioItem image="" title="CV" description="Portafolio web" subdescription="[React,Tailwindcss, Vercel]" url="https://jotaemepm.dev" />


          </div>
        </section>
      </section>
    </div >
  </>)
}