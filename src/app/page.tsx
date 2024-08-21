"use client";
import {LuckyWheelPage} from "@/app/pages/lucky/lucky-wheel-page";
import {LuckyGridPage} from "@/app/pages/lucky/lucky-grid-page";
import dynamic from "next/dynamic";

const StrategyArmoryButton = dynamic(async()=>(await import("./components/StrategyArmory")).StrategyArmory)


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-500">
            {/* 头部文案 */}
            <header className="text-3xl font-bold text-center text-gray-50 my-6">
                大营销平台 - 抽奖展示
            </header>

            <StrategyArmoryButton/>

            {/* 中间的两个div元素 */}
            {/*<div className="flex flex-col md:flex-row gap-5 mb-6">*/}
            <div className="flex flex-col md:flex-row mb-6">


                {/*<div className="w-full md:w-1/2 p-0 bg-amber-200 shadow-lg rounded-2xl">*/}
                    {/*<div className="text-gray-700">*/}
                        <LuckyWheelPage/>
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="w-full md:w-1/2 p-6 bg-amber-200 shadow-lg rounded-2xl">*/}
                {/*    <div className="text-gray-700">*/}
                {/*        <LuckyGridPage/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/* 底部文案 */}
            <footer className="text-1xl text-gray-50 text-center my-8">
                Mio的抽奖项目
            </footer>
        </div>
    );
}
