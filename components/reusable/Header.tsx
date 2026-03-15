import React, { FC } from 'react'

interface HeaderProps {
    para: string,
    heading1: string,
    heading2: string,
    Button: React.ReactNode
}

export default function Header({ para, heading1, heading2, Button }: HeaderProps) {
    return (
        <div className="flex flex-row justify-between items-center mb-8 md:gap-4 gap-2">
            <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-1 inline-block px-2 py-0.5 text-primary bg-secondary">
                    {para}
                </p>
                <h2 className="text-lg sm:text-3xl md:text-5xl font-black text-white leading-tight">
                    {heading1}{" "}
                    <span className="text-transparent"
                        style={{ WebkitTextStroke: "1.5px rgba(255,211,60,0.5)" }}>
                        {heading2}
                    </span>
                </h2>
            </div>

            <div>
                {Button}
            </div>
        </div>
    )
}
