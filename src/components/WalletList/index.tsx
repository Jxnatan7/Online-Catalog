import { useWalletContext } from "@/src/contexts/WalletContext";
import Loading from "../Loading";
import Link from "next/link";
import { Wallet } from "@/src/service/api/WalletService";

export const WalletComponent = ({ id, name, balance }: Wallet) => {
    return (
        <Link href={`/wallet/${id}`}>
            <div
                className="bg-primary-green w-40 h-28 rounded flex flex-col justify-between p-2 cursor-pointer hover:bg-secondary-green">
                <div/>
                <div>
                    <p className="text-white">{name}</p>
                    <p className="text-white font-bold">R${balance}</p>
                </div>
            </div>
        </Link>
    )
}

export const WalletList = () => {
    const { wallets, isLoading } = useWalletContext();

    if (isLoading) return <Loading/>;

    return (
        <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
            {wallets?.map((wallet, index) => (
                <div
                    key={index}
                    className="inline-block mr-4"
                >
                    <WalletComponent
                        id={wallet.id}
                        name={wallet.name}
                        balance={wallet.balance}
                        key={wallet.id}
                    />
                </div>
            ))}
        </div>
    );
};