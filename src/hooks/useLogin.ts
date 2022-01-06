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


    return {
        form,
        handleChange,
        handleSubmit
    }
}