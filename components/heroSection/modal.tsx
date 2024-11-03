// @ts-nocheck
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useGLTF,
  useVideoTexture,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  HueSaturation,
  BrightnessContrast,
  TiltShift2,
  WaterEffect,
  ToneMapping,
} from "@react-three/postprocessing";

import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useEffect } from "react";

export default function Modal() {
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position to range -0.5 to 0.5
      setMouseX(e.clientX / window.innerWidth - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas
      gl={{ antialias: false }}
      flat
      shadows
      camera={{ position: [0, 0, 8], fov: 35 }}
    >
      {/* <color attach="background" args={["#222222"]} /> */}
      <ambientLight intensity={2} />
      {/* <directionalLight intensity={2} position={[0, 10, 0]} /> */}
      {/* <fog attach="fog" args={["#353535", 5, 20]} /> */}
      {/* <ambientLight intensity={2} /> */}
      {/* <Suzi rotation={[-0.63, 0, 0]} scale={2} position={[0, -1.175, 0]} /> */}
      <Scene
        position={[0, 0.1, 0]}
        scale={1.1}
        rotation={[0, 1.6 + mouseX * Math.PI, 0]}
      ></Scene>
      {/* <Cookie
        distance={100}
        intensity={15}
        angle={0.6}
        penumbra={1}
        position={[2, 5, 0]}
      /> */}
      {/* <AccumulativeShadows
        receiveShadow
        temporal
        frames={100}
        opacity={0.8}
        alphaTest={0.9}
        scale={12}
        position={[0, -0.5, 0]}
      >
        <RandomizedLight
          radius={4}
          ambient={0.5}
          position={[5, 8, -10]}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      {/* <mesh castShadow position={[-1.5, -0.245, 1]}>
        <sphereGeometry args={[0.25, 64, 64]} />
        <meshStandardMaterial color="#353535" />
      </mesh> */}
      {/* <mesh
        castShadow
        position={[1.5, -0.24, 1]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#353535" />
      </mesh> */}
      {/* <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.51, 0]}
        scale={100}
      >
        <planeGeometry />
        <meshLambertMaterial color="#353535" />
      </mesh> */}
      {/* <Environment preset="city" /> */}
      {/* <OrbitControls
        autoRotate
        autoRotateSpeed={-0}
        enableZoom={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.5}
      /> */}
      <Postpro />
    </Canvas>
  );
}

function Postpro() {
  return (
    <EffectComposer disableNormalPass>
      {/* <HueSaturation saturation={-1} />
      <BrightnessContrast brightness={0} contrast={0.25} />
      <WaterEffect factor={0.75} />
      <TiltShift2 samples={6} blur={1} />
      <ToneMapping /> */}
      <Bloom mipmapBlur luminanceThreshold={0.1} intensity={2} />
    </EffectComposer>
  );
}

function Cookie(props: any) {
  const texture = useVideoTexture("/video/caustics.mp4");
  return <spotLight decay={0} map={texture} castShadow {...props} />;
}

function Suzi(props: any) {
  const { nodes } = useGLTF("/3d/statue.glb");
  //https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/suzanne-high-poly/model.gltf
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_3.geometry}
      {...props}
      dispose={null}
    >
      <meshStandardMaterial color="#353535" />
    </mesh>
  );
}

function Scene(props: any) {
  const gltf = useLoader(GLTFLoader, "/3d/statue.glb");
  return (
    <primitive object={gltf.scene} {...props}>
      <meshStandardMaterial color="#353535" />
    </primitive>
  );
}
