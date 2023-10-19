import { Text } from "@react-three/drei";

export const TextSection = ({title, subtitle, ...props}) => {
	return (
		<group {...props}>
      { !!title && (
        <Text color={"white"} anchorX={"left"} anchorY={"center"} fontSize={0.52} maxWidth={2.5}>
				  {title}
			  </Text>
      )}
			
			<Text color={"white"} anchorX={"left"} anchorY={"top"} position-y={-0.66} fontSize={0.22} maxWidth={2.5}>
				{subtitle}
			</Text>
		</group>
	);
};
