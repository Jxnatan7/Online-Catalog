import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-12 h-full bg-white">
            <div className="col-span-7 bg-pink-400 hidden md:block"/>
            <div className="col-span-12 md:col-span-5">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;