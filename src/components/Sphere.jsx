import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
const modelPath = `${import.meta.env.BASE_URL}models/shpere.glb`;

const Sphere = (props) => {
  const { nodes, materials } = useGLTF(modelPath);
  const sphereRef = useRef();

  return (
    <Float floatIntensity={1}>
      <group ref={sphereRef} {...props} position={[-10, 0, 0]} scale={0.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.defaultMat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload(modelPath);
export default Sphere;
