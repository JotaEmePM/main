import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div>
                <h1>Layout</h1>
                <section>
                    {/*  */}
                    <Outlet />
                </section>
            </div>
        </>
    )
}