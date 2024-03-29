import { WorkExperienceInterface } from "./experience.data"

export const WorkExperienceItem: React.FC<WorkExperienceInterface> = ({ brand, position, period, details }) => {
    return (
        <div className="relative w-full text-gray-500 dark:text-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-gray-500">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <div className="ml-6">
                <h4 className="font-bold text-black-500">{brand}</h4>
                <span className="mt-1 block text-sm font-semibold text-gray-500 dark:text-slate-400">{position}</span>
                <p className="mt-2 max-w-screen-sm text-sm text-black-500">{details}</p>
                <span className="mt-1 block text-sm font-semibold text-gray-500 dark:text-slate-400">{period}</span>
            </div>
        </div>
    )
}