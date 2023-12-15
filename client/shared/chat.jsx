import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function Chat() {
    const router = useRouter();
    useEffect(() => {
        router.push(`${process.env.NEXT_PUBLIC_CHAT_SERVER}`)
    })
    return(
        <div /> 
    )   
}