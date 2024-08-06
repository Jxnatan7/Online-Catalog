'use client'

import React, {useContext} from "react";
import Layout from "@/src/components/Layout";
import Form, { TextInput } from "@/src/components/Form"
import * as yup from "yup";
import {AuthContext, SignInProps} from "@/src/contexts/AuthContext";
import {useRouter} from "next/navigation";
import Link from 'next/link'
import Logo from "@/src/components/Logo";
import {useMutation} from "@tanstack/react-query";

const SCHEMA = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(4, 'Password must be at least 8 characters').required('Password is required'),
});

export default function Login() {
    const { signIn } = useContext(AuthContext);
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: async (form: SignInProps) => {
            await signIn(form);
        },
        onSuccess: () => {
            router.push("/dashboard");
        },
        onError: (error) => {
        },
    });

    const onSubmit = (form: SignInProps) => {
        mutation.mutate(form);
    };

    return (
        <Layout headerChildren={<Logo/>}>
            <div className="mt-44"/>
            <div className="w-full max-w-96 flex justify-start mb-5">
                <p className="self-start text-white font-bold text-3xl">Login</p>
            </div>
            <Form onSubmit={onSubmit} schema={SCHEMA}>
                <TextInput path="email" label="Email" required/>
                <div className="mt-4"/>
                <TextInput path="password" label="Password" type="password" required/>
                <div className="mt-3"/>
                <div className="mt-14"/>
                <button className="w-full max-w-96 flex justify-center items-center bg-primary-green text-white rounded font-bold h-12 shadow-sm shadow-secondary-green active:shadow-inner active:shadow-secondary-green">
                    {mutation.isPending ? <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    </svg> : "Access"}
                </button>
                <div className="mt-3"/>
                <div className="w-full max-w-96 flex justify-end">
                    <Link href="/register">
                        <p className="text-gray-200">
                            I want to create an account
                        </p>
                    </Link>
                </div>
            </Form>
        </Layout>
    );
}