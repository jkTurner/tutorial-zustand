'use client'
import { createContext, ReactNode, useContext, useState } from "react";

type CounterContextType = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    const reset = () => setCount(0);

    return (
        <CounterContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) throw new Error('useCounter must be used within a CounterProvider');
    return context;
}