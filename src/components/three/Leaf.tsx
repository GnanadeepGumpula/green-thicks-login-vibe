
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import { Vector3 } from 'three'

type LeafProps = {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  color?: string
  speed?: number
}

export default function Leaf({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1, 
  color = '#8DC63F',
  speed = 1
}: LeafProps) {
  const leafRef = useRef<THREE.Mesh>(null!)
  const randomOffset = useRef(Math.random() * 2 * Math.PI).current
  
  useFrame((state) => {
    if (leafRef.current) {
      leafRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5 * speed + randomOffset) * 0.1
      leafRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3 * speed + randomOffset) * 0.1 + rotation[1]
      leafRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.4 * speed + randomOffset) * 0.1 + rotation[2]
      
      // Add slight position sway
      const pos = leafRef.current.position
      pos.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5 * speed + randomOffset) * 0.1
      pos.x = position[0] + Math.sin(state.clock.getElapsedTime() * 0.3 * speed + randomOffset) * 0.1
    }
  })

  return (
    <group position={new Vector3(...position)} scale={scale}>
      <mesh ref={leafRef}>
        <Plane args={[1, 1.5]} rotation={[0, 0, Math.PI / 4]}>
          <meshStandardMaterial 
            color={color} 
            transparent={true} 
            opacity={0.9} 
          />
        </Plane>
      </mesh>
    </group>
  )
}
