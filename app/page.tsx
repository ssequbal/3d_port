import Scene from '../components/Scene';
import { StarsBackground } from "@/components/Starsbackground";

export default function Home() {
  return (
    <div style={{ height: '200vh' }}> {/* Make sure your page is tall enough to scroll */}
      <Scene />
      {/* <ScrollEffect /> */}
      <StarsBackground starDensity={0.0015}></StarsBackground>
    </div>
  );
};

