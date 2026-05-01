import React, { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Color, SRGBColorSpace } from "three";
import useMacbookStore from "../../store";
import { noChangeParts } from "../../constants";

export default function MacbookModel16(props) {
  const { color } = useMacbookStore();
  const { nodes, materials, scene } = useGLTF(
    "/models/macbook-16-transformed.glb",
  );

  // Fix 1: Correct texture color space + flip
  const texture = useTexture("/screen.png", (tex) => {
    tex.colorSpace = SRGBColorSpace;
    tex.flipY = false;
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (!noChangeParts.includes(child.name)) {
          child.material.color = new Color(color);
        }
      }
    });
  }, [color, scene]);

  const ROTATION = [Math.PI / 2, 0, 0];

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial001}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.zhGRTuGrQoJflBD}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.PaletteMaterial002}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.lmWQsEjxpsebDlK}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.LtEafgAVRolQqRw}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.iyDJFXmHelnMTbD}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.eJObPwhgFzvfaoZ}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.nDsMUuDKliqGFdU}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.CRQixVLpahJzhJc}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.YYwBgwvcyZVOOAA}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.SLGkCohDDelqXBu}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.WnHKXHhScfUbJQi}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.fNHiBfcxHUJCahl}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.LpqXZqhaGCeSzdu}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.gMtYExgrEUqPfln}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_96.geometry}
        material={materials.PaletteMaterial003}
        rotation={ROTATION}
      />
      <mesh
        geometry={nodes.Object_107.geometry}
        material={materials.JvMFZolVCdpPqjj}
        rotation={ROTATION}
      />

      {/* Fix 2: Stable screen material — no child JSX re-creation */}
      <mesh geometry={nodes.Object_123.geometry} rotation={ROTATION}>
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      <mesh
        geometry={nodes.Object_127.geometry}
        material={materials.ZCDwChwkbBfITSW}
        rotation={ROTATION}
      />
    </group>
  );
}

useGLTF.preload("/models/macbook-16-transformed.glb");
