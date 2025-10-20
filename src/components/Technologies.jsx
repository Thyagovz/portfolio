import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiJavascriptLine, RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Tecnologias</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
        <div className="p-4">
          <SiTailwindcss className="text-7xl text-cyan-500" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <RiJavascriptLine className="text-7xl text-yellow-300" />
        </div>
        <div className="p-4">
          <FaHtml5 className="text-7xl text-orange-600" />
        </div>
        <div className="p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        <div className="p-4">
          <TbBrandTypescript className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
