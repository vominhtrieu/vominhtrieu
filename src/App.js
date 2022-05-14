import {Suspense, useRef, useState} from "react";
import {Canvas} from "@react-three/fiber";
import Earth, {EARTH_SIZE} from "./Models/Earth";
import Sun from "./Models/Sun";
import {OrbitControls} from "@react-three/drei";
import Information from "./Information";

function App() {
    const sunRef = useRef(null);
    const earthRef = useRef(null);

    const orbitControl = <OrbitControls target={[0, 0, 4.82]}
                                        maxDistance={1}
                                        minDistance={EARTH_SIZE + 0.169}
                                        enableRotate={true}
                                        enablePan={false}
                                        enableZoom={true}/>;
    return (
        <div style={{width: "100vw", height: "100vh", position: "relative", overflow: "hidden"}}>
            <Canvas
                style={{
                    width: "100vw",
                    height: "100vh",
                    background: "url('Background.jpg')",
                }}>
                <Suspense fallback={null}>
                    <Earth earthRef={earthRef} position={[0, 0, 4.82]}/>
                    <Sun sunRef={sunRef} position={[0, 0, 10]}/>
                    <ambientLight intensity={0.1} />
                    {orbitControl}
                </Suspense>
            </Canvas>
            <Information section={0}/>
        </div>
    );
}

export default App;
