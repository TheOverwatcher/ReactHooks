import { useEffect, useRef, useState } from "react";

export const useFetch = (url:string) => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({data:null, loading:true});

    useEffect(() => {
        return () => {
            // called when the component is going to unmount
            isCurrent.current = false;
        }
    }, [])

    useEffect(() => {
        setState(state => ({data:state.data,loading:true}))
        fetch(url)
            .then(x => x.text())
            .then((y:any) => {
            setTimeout(() => {
                if(isCurrent.current) {
                    setState({data:y, loading:false})
                }
            },2000);
            });
    }, [url, setState]);

    return state;
};