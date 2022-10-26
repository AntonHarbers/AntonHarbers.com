import Header from "../components/Header";
import {motion} from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div className=" text-start h-full flex justify-center flex-col mx-auto" initial={{ x: "100vw", opacity: 0 }} exit={{ x: "-100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <div className=" text-3xl my-5">
        Hey there! My Name is <span className=" font-bold text-5xl">Anton Harbers</span> and my passion is creating anything code related.
      </div>
      <div className=" text-3xl my-5">
        Currently im focused on <span className=" font-bold text-4xl">front end web design</span> and <span className=" font-bold text-4xl">unity game development</span>!
      </div>
      <div className=" text-3xl my-5">
        Check out my portfolio on the <span className=" font-bold text-6xl underline hover:text-secondary transition duration-300"><Link href={"/projects"}>projects</Link></span> and <span className=" font-bold text-5xl"></span> page!
      </div>
    </motion.div>
  )
}
