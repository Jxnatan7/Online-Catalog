import React from "react";

const AuthLayout = ({children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-12 h-full bg-gray-300">
            <div className="col-span-7 bg-pink-700">

            </div>
            <div className="col-span-5">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;