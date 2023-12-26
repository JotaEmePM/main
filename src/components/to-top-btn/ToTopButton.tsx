import {useEffect, useState } from 'react';

export const ToTopButton = () => {
    const [scrollTop, setScrollTop] = useState(0);
    

    // useEffect(( ) => {
    //     if(scrollTop > 200){
    //         if(btn){
    //             const btnScroll = btn as unknown as HTMLElement;
    //             console.log(btnScroll)
    //             //btnScroll?.classList.remove('invisible')
    //         }
    //     } else {
    //         if(btn){
    //             const btnScroll = btn as unknown as HTMLElement;                
    //             //btnScroll?.classList.add('invisible')
    //             console.log(btnScroll)
    //         }
    //     }
    // }, [scrollTop])

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

    return (
        <button id="to-top-btn"
            title="Go To Top"            
            onClick={() => goToTop()}
            className={ `fixed z-90 bottom-22 right-8 border-0 w-12 h-12 rounded-full drop-shadow-md bg-teal-300 text-white text-3xl font-bold ${(scrollTop < 200) ? "hidden": ""} `}>
                &uarr;
        </button>
    )
}