'use client'

import React, { useContext } from "react";
import Form, { TextInput } from "@/src/components/Form"
import * as yup from "yup";
import { AuthContext, SignInProps } from "@/src/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { useMutation } from "@tanstack/react-query";
import AuthLayout from "@/src/components/Layout/Auth";
import Loading from "@/src/components/Loading";

const SCHEMA = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(4, 'Password must be at least 8 characters').required('Password is required'),
});

export default function Login() {
    const { signIn } = useContext(AuthContext);
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: async (form: SignInProps) => {
            // await signIn(form);
        },
        onSuccess: () => {
            router.push("/login");
        },
        onError: (error) => {
        },
    });

    const onSubmit = (form: SignInProps) => {
        mutation.mutate(form);
    };

    return (
        <AuthLayout>
            <div className="flex flex-col items-center h-full">
                <div className="mt-24" />
                <p className="text-black font-semibold text-3xl">Criar conta</p>
                <div className="mb-10" />
                <Form onSubmit={onSubmit} schema={SCHEMA}>
                    <TextInput path="email" label="Email" required />
                    <div className="mt-4" />
                    <TextInput path="name" label="Name" required />
                    <div className="mt-4" />
                    <TextInput path="password" label="Password" type="password" required />
                    <div className="mt-4" />
                    <TextInput path="cpf" label="CPF" required />
                    <div className="mt-3" />
                    <div className="mt-14" />
                    <button className="w-full max-w-96 flex justify-center items-center bg-pink-500 hover:bg-pink-400 active:opacity-80 text-white rounded font-bold h-12 shadow-sm shadow-secondary-green active:shadow-inner active:shadow-secondary-green">
                        {mutation.isPending ? <Loading /> : "Criar conta"}
                    </button>
                    <div className="mt-3" />
                    <div className="w-full max-w-96 flex justify-end active:opacity-80">
                        <Link href="/login">
                            <p className="text-black">
                                Fazer login
                            </p>
                        </Link>
                    </div>
                </Form>
            </div>
        </AuthLayout>
    );
}