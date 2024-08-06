'use client'

import React from "react";
import {Icon} from "@iconify/react";
import {useBoolean, useWallets} from "@/src/hooks";
import Modal from "@/src/components/Modal";
import Form, {TextInput} from "@/src/components/Form";
import Loading from "@/src/components/Loading";
import Success from "@/src/components/Success";
import * as yup from "yup";
import {useMutation} from "@tanstack/react-query";
import {WalletService, WalletServiceSaveWalletRequestFc} from "@/src/service/api/WalletService";
import SearchInput from "@/src/components/SearchInput";
import {WalletProvider} from "@/src/contexts/WalletContext";
import { WalletList } from "@/src/components/WalletList";

const SCHEMA = yup.object().shape({
    name: yup.string().required('Name is required'),
});

export default function Dashboard() {
    const { falsy, truly, bool } = useBoolean();
    const { data: wallets, isLoading, refetch } = useWallets();

    const mutation = useMutation({
        mutationFn: async (form: WalletServiceSaveWalletRequestFc) => {
            await WalletService.save(form);
        },
        onSuccess: () => {
            refetch().then(() => falsy()).catch();
        },
        onError: (error) => {
        },
    });

    const onSubmit = (form: WalletServiceSaveWalletRequestFc) => {
        mutation.mutate(form);
    };

    return (
        <WalletProvider>
                <div className="w-full max-w-96 flex flex-col">
                    <div className="flex justify-between items-center mt-10">
                        <p className="text-white font-bold text-4xl">Wallets</p>
                        <button className="active:opacity-50" onClick={truly}>
                            <Icon icon='tabler:plus' fontSize={27} color='#FFF' />
                        </button>
                    </div>
                    <div className="mt-5"/>
                    <SearchInput/>
                    <div className="mt-5"/>
                    <WalletList />
                    <Modal isOpen={bool} title="New Wallet" onClose={falsy}>
                        <Form onSubmit={onSubmit} schema={SCHEMA}>
                            <TextInput path="name" label="Name" required />
                            <div className="mt-4"/>
                            <button type="submit" className="w-full max-w-96 flex justify-center items-center bg-primary-green text-white rounded font-bold h-12 shadow-sm shadow-secondary-green active:shadow-inner active:shadow-secondary-green">
                                {mutation.isPending ? <Loading/> : mutation.isSuccess ? <Success/> : "Create Wallet"}
                            </button>
                            <div className="mt-3"/>
                        </Form>
                    </Modal>
                </div>
        </WalletProvider>
    );
}