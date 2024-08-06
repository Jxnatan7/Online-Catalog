import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Wallet } from '@/src/service/api/WalletService';
import {useWallets} from "@/src/hooks";

interface WalletContextType {
    wallets?: Wallet[];
    isLoading: boolean;
    refetch: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const { data: wallets, isLoading, refetch } = useWallets();

    return (
        <WalletContext.Provider value={{ wallets, isLoading, refetch }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = () => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error('useWalletContext must be used within a WalletProvider');
    }
    return context;
};