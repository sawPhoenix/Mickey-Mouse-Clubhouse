import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
export default function () {
  return (
    <div>
      <Canvas style={{ background: 'black' }}>
        <mesh>
          <boxBufferGeometry />
          <meshBasicMaterial color="blue" />
        </mesh>
      </Canvas>
    </div>
  );
}
