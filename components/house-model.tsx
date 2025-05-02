"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Html, PresentationControls } from "@react-three/drei"
import { easing } from "maath"

// Room component for the house
function Room({ position, color, name, isActive, onClick, scale = [1, 1, 1] }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Pulse animation for active room
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Glow effect for active room
      if (isActive) {
        easing.damp(meshRef.current.material, "emissiveIntensity", 0.5, 0.2, delta)
      } else if (hovered) {
        easing.damp(meshRef.current.material, "emissiveIntensity", 0.2, 0.2, delta)
      } else {
        easing.damp(meshRef.current.material, "emissiveIntensity", 0, 0.2, delta)
      }
    }
  })

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        scale={scale}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={isActive ? color : "#FFFFFF"}
          emissive={color}
          emissiveIntensity={0}
          metalness={0.2}
          roughness={0.5}
        />
      </mesh>

      {/* Room label */}
      <Text
        position={[0, -0.7, 0]}
        fontSize={0.15}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Montserrat-Bold.ttf"
      >
        {name}
      </Text>

      {/* Active indicator */}
      {isActive && (
        <Html position={[0, 0.8, 0]} center>
          <div
            className="px-2 py-1 rounded-full text-xs text-white whitespace-nowrap"
            style={{ backgroundColor: color }}
          >
            Selected Room
          </div>
        </Html>
      )}
    </group>
  )
}

// Furniture components
function LivingRoomFurniture({ color }) {
  return (
    <group position={[-1.5, 0, 0]}>
      {/* Sofa */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[0.8, 0.4, 0.4]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh>

      {/* Coffee table */}
      <mesh position={[0, 0.1, 0.5]} castShadow>
        <boxGeometry args={[0.5, 0.1, 0.3]} />
        <meshStandardMaterial color="#A67C52" />
      </mesh>

      {/* TV */}
      <mesh position={[0, 0.5, -0.2]} castShadow>
        <boxGeometry args={[0.6, 0.3, 0.05]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  )
}

function KitchenFurniture({ color }) {
  return (
    <group position={[1.5, 0, 0]}>
      {/* Counter */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[0.8, 0.1, 0.4]} />
        <meshStandardMaterial color="#EEEEEE" />
      </mesh>

      {/* Cabinets */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.8, 0.6, 0.4]} />
        <meshStandardMaterial color="#A67C52" />
      </mesh>

      {/* Sink */}
      <mesh position={[0.2, 0.35, 0]} castShadow>
        <boxGeometry args={[0.2, 0.05, 0.2]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh>
    </group>
  )
}

function BathroomFurniture({ color }) {
  return (
    <group position={[1.5, 0, -1.5]}>
      {/* Sink */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[0.4, 0.1, 0.3]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Toilet */}
      <mesh position={[0, 0.2, -0.2]} castShadow>
        <boxGeometry args={[0.2, 0.4, 0.2]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Shower */}
      <mesh position={[0.2, 0.4, 0.2]} castShadow>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#CCCCCC" opacity={0.5} transparent />
      </mesh>
    </group>
  )
}

function BedroomFurniture({ color }) {
  return (
    <group position={[-1.5, 0, -1.5]}>
      {/* Bed */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[0.7, 0.2, 0.5]} />
        <meshStandardMaterial color="#DDDDDD" />
      </mesh>

      {/* Pillow */}
      <mesh position={[0.2, 0.3, 0]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.3]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Nightstand */}
      <mesh position={[0.5, 0.15, 0.2]} castShadow>
        <boxGeometry args={[0.2, 0.3, 0.2]} />
        <meshStandardMaterial color="#A67C52" />
      </mesh>
    </group>
  )
}

// House structure
function HouseStructure({ color }) {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="#F0F0F0" />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 0, -2.5]} receiveShadow>
        <boxGeometry args={[5, 2, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      <mesh position={[0, 0, 2.5]} receiveShadow>
        <boxGeometry args={[5, 2, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      <mesh position={[-2.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[5, 2, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      <mesh position={[2.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[5, 2, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Room dividers */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[5, 2, 0.05]} />
        <meshStandardMaterial color="#F5F5F5" />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[5, 2, 0.05]} />
        <meshStandardMaterial color="#F5F5F5" />
      </mesh>
    </group>
  )
}

// Main scene component
function HouseScene({ activeRoom, accentColor, setActiveRoom }) {
  const { camera } = useThree()
  const groupRef = useRef()
  const [isRotating, setIsRotating] = useState(true)

  // Set initial camera position
  useEffect(() => {
    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)
  }, [camera])

  // Slow rotation animation
  useFrame((state, delta) => {
    if (groupRef.current && isRotating) {
      groupRef.current.rotation.y += delta * 0.1 // 10 seconds for full rotation
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.2} />

      <Environment preset="apartment" />

      <group ref={groupRef} onPointer />

      <Environment preset="apartment" />

      <group ref={groupRef} onPointerOver={() => setIsRotating(false)} onPointerOut={() => setIsRotating(true)}>
        <HouseStructure color={accentColor} />

        {/* Room components */}
        <Room
          position={[-1.5, 0, 0]}
          color={accentColor}
          name="Living Room"
          isActive={activeRoom === "living"}
          onClick={() => setActiveRoom("living")}
        />
        <Room
          position={[1.5, 0, 0]}
          color={accentColor}
          name="Kitchen"
          isActive={activeRoom === "kitchen"}
          onClick={() => setActiveRoom("kitchen")}
        />
        <Room
          position={[1.5, 0, -1.5]}
          color={accentColor}
          name="Bathroom"
          isActive={activeRoom === "bathroom"}
          onClick={() => setActiveRoom("bathroom")}
        />
        <Room
          position={[-1.5, 0, -1.5]}
          color={accentColor}
          name="Bedroom"
          isActive={activeRoom === "bedroom"}
          onClick={() => setActiveRoom("bedroom")}
        />

        {/* Furniture based on active room */}
        <LivingRoomFurniture color={accentColor} />
        <KitchenFurniture color={accentColor} />
        <BathroomFurniture color={accentColor} />
        <BedroomFurniture color={accentColor} />
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.5}
        enableRotate={false}
      />
    </>
  )
}

export default function HouseModel({ activeRoom, accentColor }) {
  const [room, setRoom] = useState(activeRoom)

  useEffect(() => {
    setRoom(activeRoom)
  }, [activeRoom])

  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 30 }}>
      <color attach="background" args={["#1A2526"]} />
      <fog attach="fog" args={["#1A2526", 5, 20]} />
      <Suspense fallback={null}>
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <HouseScene activeRoom={room} accentColor={accentColor} setActiveRoom={setRoom} />
        </PresentationControls>
      </Suspense>
    </Canvas>
  )
}
