'use client'

import React from "react";
import { Icon } from "@iconify/react";
import { useBoolean } from "@/src/hooks";
import SearchInput from "@/src/components/SearchInput";
import Image from "next/image";

export const Header = () => {
    return (
        <div className="col-span-12 h-16 bg-white border-b border-gray-200 px-10">
            <div className="flex justify-between items-center h-full">
                <div className="w-1/12">
                    <p className="text-pink-500 font-bold md:text-xl sm:text-sm">
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
        <div className="grid grid-rows-12 h-full bg-slate-50">
            {children}
        </div>
    )
}

export const Company = ({ company }: { company: any }) => {
    return (
        <div className="w-[90%] h-24 flex justify-between items-center bg-white shadow hover:shadow-lg cursor-pointer rounded px-2">
            <div className="w-1/4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={company.image} alt="company-image" className="w-full h-auto rounded"/>
            </div>
        </div>
    )
}

export const CompanyList = () => {
    const company = {
        name: "Paraíso do açaí",
        image: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
        distance: 1700, // metros,
        category: "Açaí",
        deliveryFee: 12.50
    };
    const list = [company, company, company, company, company, company, company, company, company, company, company, company];
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                list?.map((company, index) => <Company key={index} company={company}/>)
            }
        </div>
    )
}

export default function Dashboard() {
    return (
        <Layout>
            <Header />
            <div className="col-span-12 px-10">
                <div className="mt-10"/>
                <div className="flex flex-col h-full">
                    <p className="text-gray-500 font-semibold text-3xl">
                        Lojas próximas de você
                    </p>
                    <div className="mt-10"/>
                    <CompanyList />
                </div>
            </div>
        </Layout>
    );
}