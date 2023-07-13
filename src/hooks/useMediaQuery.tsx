import  {useEffect, useState} from 'react';
// instead of using window.innerWidth to watch changes of screen size, we can use matMedia
export const useMediaQuery = () =>{
    const [isAboveMediumScreen, setIsAboveMediumScreen] = useState(window.matchMedia("(min-width:1060px)").matches);

    useEffect(()=>{
     
        const mediaWatcher = window.matchMedia("(min-width:1060px)");
        const updateIsAboveMediumScreen = () =>{
                setIsAboveMediumScreen(mediaWatcher.matches);
            
        }
        window.addEventListener('resize',updateIsAboveMediumScreen);
        //clean up function
        return () => window.removeEventListener('resize', updateIsAboveMediumScreen);

    },[]);

    return isAboveMediumScreen;
}