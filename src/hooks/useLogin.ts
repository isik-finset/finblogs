import React, { useState } from 'react';


export default function useLogin<Type>(initialForm: Type) {
    const [ form, setForm ] = useState<Type>(initialForm)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(JSON.stringify(form))
    }

    const emailValidation = (email: string) => {
        const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return !(!email || regex.test(email) === false);
    }


    return {
        form,
        handleChange,
        handleSubmit,
        emailValidation
    }
}