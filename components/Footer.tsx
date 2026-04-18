import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-gray-400">

        <div className="flex justify-center gap-6 mb-4 text-xl">

          <a
            href="https://github.com/Augustu-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/augustus-chipondeponde-8377b0373"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:chipondepondeaugustus@gmail.com"
            className="hover:text-green-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} Augustus
        </p>

      </div>
    </footer>
  );
}