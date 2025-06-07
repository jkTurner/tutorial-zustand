'use client';
import { usePersistCounterStore } from '@/lib/store/persistCounterStore';

export default function WithZustandPage() {
    const { count, increment, decrement, reset } = usePersistCounterStore();

    return (
        <div className="flex flex-col items-center justify-center gap-4 h-[60vh]">
            <h1>With Zustand Persist</h1>
            <span>Count: {count}</span>
            <div className="flex gap-2">
                <button onClick={increment} className="px-4 py-2 bg-rose-400 text-white rounded">+</button>
                <button onClick={decrement} className="px-4 py-2 bg-teal-400 text-white rounded">-</button>
                <button onClick={reset} className="px-4 py-2 bg-slate-600 text-white rounded">Reset</button>
            </div>
        </div>
    );
}
