import React, {Suspense} from "react";
import {Preload, Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
export const StarsCanvas = () => {
    return (
        <div className='stars-canvas'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars/>
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};