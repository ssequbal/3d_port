"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React from 'react';

const Scene = () => {
  const { scene } = useGLTF('../spaceman1.glb');

  return (
    <Canvas camera={{ position: [-0.5, -1, -8], fov: 50 }}>
      <OrbitControls />
      {/* Add ambient light with a custom intensity */}
      <ambientLight intensity={0.5} />
      
      {/* Add a point light with position, intensity, and color */}
      <pointLight position={[100, 0, 0]} intensity={100} color={"white"} />
      <pointLight position={[100, 0, 0]} intensity={100} color={"blue"} />
      
      {/* Optionally, add more lights to enhance the scene */}
      <directionalLight position={[-5, 5, 5]} intensity={4} />
      <hemisphereLight  groundColor={"red"} intensity={0.3} />
      
      <primitive object={scene} />
    </Canvas>
  );
};

export default Scene;