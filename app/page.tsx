import Link from "next/link";

export default function HomePage() {

    return (
		<div className="flex flex-col items-center justify-center h-[60vh] gap-4 w-full max-w-[600px] mx-auto text-center">
			<h1 className="text-xl">Welcome to Zustand Tutorial</h1>
			<p className="text-gray-400">Learn how to set up Zustand for global state management in a Next.js 15 project. A beginner-friendly guide with examples and comparisons to React Context.</p>
			<div className="flex gap-[24px]">
				<Link href="/no-zustand">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer">
						Test without Zustand
					</button>
				</Link>
				<Link href="/with-zustand">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer">
						Test with Zustand
					</button>
				</Link>
				<Link href="/zustand-persist">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer">
						Test with Zustand Persist
					</button>
				</Link>
			</div>
		</div>
    );
}
