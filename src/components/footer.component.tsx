import Link from "next/link";
import { DiGithub } from "react-icons/di";
import {
  FaCopyright,
  FaGithub,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

export function Footer() {
  return (
    <div className="mt-10 p-5 border-t border-t-zinc-300 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      <div className="flex flex-row gap-3">
        <FaLinkedin className="text-blue-950 size-6" />
        <FaGithub className="text-blue-950 size-6" />
      </div>

      <div className="flex flex-row gap-3 items-center">
        <FaRegCopyright className="text-blue-950 size-3" />
        Created by{" "}
        <Link
          href="https://gabrcastro.vercel.app"
          className="hover:text-blue-500"
        >
          Gabriel Castro
        </Link>
      </div>
    </div>
  );
}
