'use client'

import React from "react";
import { Icon } from "@iconify/react";
import { useBoolean } from "@/src/hooks";
import SearchInput from "@/src/components/SearchInput";

export const Header = () => {
    return (
        <div className="col-span-12 h-16 bg-white border-b border-gray-200">
            <div className="flex justify-between items-center h-full px-10">
                <div className="w-1/12">
                    <p className="text-pink-500 font-bold text-xl">
                        OnCatalog
                    </p>
                </div>
                <p className="px-10" />
                <SearchInput />
                <p className="px-10" />
                <div className="w-1/5 flex justify-around items-center">
                    <p className="text-gray-500 font-normal text-xs underline pt-2 text-ellipsis overflow-hidden whitespace-nowrap">
                        Avenida Oscar Caetano - 550
                    </p>
                    <Icon icon='tabler:caret-down-filled' fontSize={20} color='#121212' />
                </div>
                <p className="px-10" />
                <div className="w-1/12">
                    <button className="w-11 h-11 flex justify-around items-center rounded-full bg-white border border-gray-200">
                        <Icon icon='tabler:user' fontSize={20} color='#121212' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-12 h-full bg-slate-50">
            {children}
        </div>
    )
}

export default function Dashboard() {
    const { falsy, truly, bool } = useBoolean();

    return (
        <Layout>
            <Header />
        </Layout>
    );
}