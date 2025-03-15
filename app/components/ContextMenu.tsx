import { RefObject } from "react";
import Image from "next/image"

export default function ContextMenu({ x, y, reference }: { x: number; y: number; reference: RefObject<HTMLDivElement | null> }) {

    return (
        <div className="absolute bg-[#272727] z-50 p-3 rounded-2xl" style={{ left: `${x}px`, top: `${y}px` }} ref={reference}>
            <div className="flex flex-col">
                <div className="menuTendina">
                    <Image src="/whiteout.png" width={24} height={24} alt="none" />
                    <h3 className="text-[15px] font-bold">Open</h3>
                </div>
                <div className="menuTendina">
                    <Image src="/adminShield.png" width={24} height={24} alt="admin logo" />
                    <h3 className="text-[15px]">Run as administrator</h3>
                </div>
                <div className="menuTendina">
                    <Image src="/whiteout.png" width={24} height={24} alt="none" />
                    <h3 className="text-[15px]">Rename</h3>
                </div>
                <div className="menuTendina">
                    <Image src="/whiteout.png" width={24} height={24} alt="none" />
                    <h3 className="text-[15px]">Delete</h3>
                </div>
            </div>
        </div>
    )
}