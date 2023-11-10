import { useStore } from "../../../../../../stores/appStore";
import Shadermateriaal from "../../../../../../components/ShaderMateriaal";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import { useRef } from "react";
import WoodShape from "../../../WoodShape";

const Deur9 = ({ colorMap, colorMap4, materialProps, handleGlassColor }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	const holeCut = useRef();

	return (
		<>
			<mesh position={[0, -0.25, 0]}>
				<boxGeometry args={[doorWidth / 1000 - 0.166 * 2, 0.166, 0.04]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap4} />}
			</mesh>

			<mesh position={[0, 0.341, 0]} receiveShadow castShadow>
				<Geometry>
					<Base position={[0, 0.0001, 0]}>
						<boxGeometry args={[doorWidth / 1000 - 0.332, doorHeight / 1000 - 1.014, 0.04]} />
					</Base>

					<Subtraction ref={holeCut} name="cavity" position={[-0.25, -0.68, -0.13]}>
						<WoodShape />
					</Subtraction>
				</Geometry>

				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap4} />}
			</mesh>

			{/* <mesh position={[-0.25, 0.341 - 0.68, -0.13]}>
				<WoodShape />
				<meshBasicMaterial color={"red"} />
			</mesh> */}

			<mesh position={[0, 0.341, 0]} receiveShadow castShadow>
				<boxGeometry args={[0.04, doorHeight / 1000 - 1.014, 0.04]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap} />}
			</mesh>

			<mesh position={[0, 0.521, 0]} receiveShadow castShadow>
				<boxGeometry args={[doorWidth / 1000 - 0.332, 0.04, 0.039]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap4} />}
			</mesh>

			<mesh position={[0, 0.161, 0]} receiveShadow castShadow>
				<boxGeometry args={[doorWidth / 1000 - 0.332, 0.04, 0.039]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap4} />}
			</mesh>

			<mesh position={[0, 0.341, 0]} receiveShadow castShadow>
				<boxGeometry args={[doorWidth / 1000 - 0.332, doorHeight / 1000 - 1.014, 0.01]} />
				{drawingplan ? <Shadermateriaal /> : <meshPhysicalMaterial {...materialProps} color={handleGlassColor()} />}
			</mesh>

			<mesh position={[0, -0.59, 0]} receiveShadow castShadow>
				<boxGeometry args={[doorWidth / 1000 - 0.332, 0.52, 0.01]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap4} />}
			</mesh>

			<mesh position={[0, -0.59, 0]} receiveShadow castShadow>
				<boxGeometry args={[doorWidth / 1000 - 0.372, 0.47, 0.04]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap} />}
			</mesh>
		</>
	);
};

export default Deur9;
