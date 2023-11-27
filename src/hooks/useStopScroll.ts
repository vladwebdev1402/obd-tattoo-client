import { useEffect } from "react";


export const useStopScroll = (active=true) => {
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
    
        if (active) body.className += ` stop_scroll`;
        else body.className = body.className.replace(` stop_scroll`, "");
    
        return () => {
            body.className = body.className.replace(` stop_scroll`, "");
        };
      }, [active]);
}