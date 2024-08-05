import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import ProjectPageShell from "@/components/ProjectPageShell";
import Particles from "@/components/Particles";
import FadeBlurHeader from "@/components/FadeBlurHeader";

export default function AbtPage() {
  return (
    <ProjectPageShell>
         <div className="relative flex flex-col items-center justify-center w-full h-full py-20 overflow-hidden">
         <Particles className="absolute inset-0 -z-10 animate-fade-in bg-gradient-to-t from-slate-950/20 to-transparent overflow-hidden" quantity={100} />
            <FadeBlurHeader text={'Abt Electronics'} />
        </div>
    </ProjectPageShell>
  );
}
