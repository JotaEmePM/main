import { HOMEPAGE_URL } from "../../Config"

export const FooterSection = () => {
    const today = new Date()
    return (
        <footer className="text-zinc-500 text-center p-4">
            &copy; {today.getFullYear()} <a href={HOMEPAGE_URL}>José Miguel Pérez</a>. Todos los derechos reservados
        </footer>
    )
}