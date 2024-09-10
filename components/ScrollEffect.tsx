"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ScrollEffect = () => {
  const ref = useRef<THREE.PerspectiveCamera>(null!);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && ref.current.position) {
        const scrollY = window.scrollY;
        ref.current.position.z = scrollY * -0.1; // Adjust sensitivity as needed
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Make sure the camera component is properly created with a ref
    <perspectiveCamera ref={ref} position={[0, 0, 5]} />
  );
};

export default ScrollEffect;