import { useGLTF } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useStore } from "../../../../stores/appStore";

export const Door2 = (props) => {
	const { nodes, materials } = useGLTF("/doormodels/door2.glb");
	const doorOpen = useStore((state) => state.sidepanel.doorOpen);
	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 180, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, 1.6]);

	return (
		<a.group {...props} dispose={null} position={[6.1, 0, 0.2]} rotation-y={rotation}>
			<group position={[-4.5 - 6.5, 0.5, 0.25]} rotation={[-Math.PI, 4.7, -Math.PI]} scale={12}>
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_1.geometry} material={materials["Metall.Aniz"]} />
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_2.geometry} material={materials["Back.002"]} />
			</group>
			<group position={[-6, 5.9, -0.05]} rotation={[0, 0, 0]} scale={0.3} scale-x={0.36}>
				<mesh castShadow receiveShadow geometry={nodes.Mesh042.geometry} material={materials["glass.004"]} />
				<mesh castShadow receiveShadow geometry={nodes.Mesh042_1.geometry} material={materials["Material.025"]} />
			</group>
		</a.group>
	);
};

useGLTF.preload("/doormodels/door2.glb");
