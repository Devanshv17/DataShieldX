import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function Chat() {
    const router = useRouter();
    useEffect(() => {
        // router.push(`${process.env.NEXT_PUBLIC_CHAT_SERVER}`)
        const newWindow = window.open(`${process.env.NEXT_PUBLIC_CHAT_SERVER}`, '_blank');

        // Optional: You can focus on the new window if needed
        if (newWindow) {
            newWindow.focus();
        }
    })
    return(
        <div /> 
    )   
}