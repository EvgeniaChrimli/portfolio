import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

const Sphere = (props) => {
  const { nodes, materials } = useGLTF("./models/sphere.glb");
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

useGLTF.preload("./models/sphere.glb");
export default Sphere;
