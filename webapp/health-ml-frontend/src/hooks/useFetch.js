import { useEffect, useRef, useState } from "react";


export const useFetch = (endpoint, values) => {
    const [state, setState] = useState({ data: null, loading: true, eror: false});
    const isMounted = useRef(true);
    const completeEndpoint = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/${endpoint}`;

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, eror: false });
        const headers = {
            'content-type': 'application/json',
            ...values
        };

        const completeUrl = new URL(completeEndpoint);
        completeUrl.search = new URLSearchParams(values).toString();

        console.log({values});
        fetch(completeUrl, {
                method: 'GET',
                headers
            })
            .then(resp => resp.json())
            .then(data => {
                if(isMounted.current) {
                    setState({
                        loading: false,
                        error: false,
                        data
                    });
                }
            });

    }, [completeEndpoint, values]);

    return state;
}
