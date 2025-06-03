import { Float, useGLTF } from "@react-three/drei";
const modelPath = `${import.meta.env.BASE_URL}models/react.glb`;

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF(modelPath);
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.4} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload(modelPath);
export default ReactLogo;
