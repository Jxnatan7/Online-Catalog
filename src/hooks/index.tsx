import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {WalletService} from "@/src/service/api/WalletService";
import {TransactionService} from "@/src/service/api/TransactionService";
import {useFormContext, useWatch} from "react-hook-form";

export function useBoolean(init = false) {
    const [bool, setter] = useState(init)
    return {
        bool,
        toggle: () => {
            setter(b => !b)
        },
        truly: () => {
            setter(true)
        },
        falsy: () => {
            setter(false)
        }
    }
}

export function useWallets() {
    return useQuery({
        queryKey: ['wallets'],
        queryFn: () => WalletService.findAll()
    });
}

export function useWallet(walletId: number) {
    return useQuery({
        queryKey: ['wallet'],
        queryFn: () => WalletService.find(walletId)
    });
}

export function useTransactions(walletId: number) {
    return useQuery({
        queryKey: ['transactions'],
        queryFn: () => TransactionService.findAll(walletId)
    });
}

export function useValue(path: string) {
    const { getValues } = useFormContext()
    return getValues(path)
}

export function useWatchField(path: string) {
    const initial = useValue(path)
    const [value, setValue] = useState(initial)
    const watched = useWatch({ name: path })
    useEffect(() => {
        setValue(watched)
    }, [watched])
    return value
}
