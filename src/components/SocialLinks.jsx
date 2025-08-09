import "./SocialLinks.css"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialLinks(){
    return(
        <div className="social-links">
        <a href="https://github.com/camilo-cloud" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/camilo-cuartas-dev/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/TU_USUARIO" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    )
}