/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/game.glb
Author: Skript47 (https://sketchfab.com/Skript47)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/computer-monitor-169-low-poly-game-ready-336de680dd9a4d84943d05d9c7dde1b0
Title: Computer Monitor 16:9 (Low Poly, Game Ready)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Game(props) {
  const { nodes, materials } = useGLTF("../../public/models/game.glb");
  return (
    <group {...props} position={[0, -0.3, 0]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Monitor_01_A}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Monitor_01_B}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../../public/models/game.glb");