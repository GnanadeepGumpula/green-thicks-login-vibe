
import { Canvas } from '@react-three/fiber'
import { useMemo } from 'react'
import { OrbitControls, Sphere } from '@react-three/drei'
import Leaf from './Leaf'

export default function LeafScene({ isSignup = false }) {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
        />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 3}
        />
        <LeafParticles count={isSignup ? 20 : 15} />
        <GreenSphere />
      </Canvas>
    </div>
  )
}

function GreenSphere() {
  return (
    <Sphere args={[2.5, 32, 32]} position={[0, 0, 0]}>
      <meshPhysicalMaterial
        color="#339933"
        transmission={0.6}
        roughness={0.3}
        metalness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.3}
        opacity={0.7}
        transparent
      />
    </Sphere>
  )
}

function LeafParticles({ count = 15 }) {
  const leafColors = ['#8DC63F', '#339933', '#1E5C1E', '#66A63D']
  
  const leaves = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const radius = 5 + Math.random() * 2
      const angle = (i / count) * Math.PI * 2
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 3
      const y = Math.sin(angle) * radius + (Math.random() - 0.5) * 2
      const z = (Math.random() - 0.5) * 4
      
      return {
        position: [x, y, z] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ] as [number, number, number],
        scale: 0.5 + Math.random() * 0.5,
        color: leafColors[Math.floor(Math.random() * leafColors.length)],
        speed: 0.5 + Math.random() * 0.5
      }
    })
  }, [count])
  
  return (
    <group>
      {leaves.map((leaf, i) => (
        <Leaf
          key={i}
          position={leaf.position}
          rotation={leaf.rotation}
          scale={leaf.scale}
          color={leaf.color}
          speed={leaf.speed}
        />
      ))}
    </group>
  )
}
