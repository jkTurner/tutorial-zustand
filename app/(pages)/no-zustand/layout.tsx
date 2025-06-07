import { CounterProvider } from "@/context/CounterContext";
import { ReactNode } from "react";

export default function NoZustandLayout({ children }: { children : ReactNode }) {
    return (
        <div className="flex justify-center items-center w-full h-[60vh]">
            <CounterProvider>
                {children}
            </CounterProvider>
        </div>
    )
}