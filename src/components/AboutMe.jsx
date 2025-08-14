import "./AboutMe.css";
import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaBullseye, FaUsers, FaVideo, FaSearch } from "react-icons/fa";

export default function AboutMe() {
  const skills = [
    { text: "Frontend Development (React, JS, HTML, CSS)", icon: FaReact },
    { text: "Software Testing & Quality Assurance", icon: FaBullseye },
    { text: "Git, GitHub & Vite Workflow", icon: FaGitAlt },
    { text: "Digital Marketing & Audience Growth", icon: FaUsers },
    { text: "Content Creation (YouTube, Blogs)", icon: FaVideo },
    { text: "SEO & Web Optimization", icon: FaSearch }
  ];

  return (
    <section id="about" className="aboutMe">
      <h2 className="aboutMe__title">About Me</h2>

      <motion.div
        className="aboutMe__content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="aboutMe__skills-column"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.ul
            className="aboutMe__skills-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.li
                  key={i}
                  className="aboutMe__skill-item"
                  variants={{
                    hidden: { opacity: 0, x: -15 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Icon className="aboutMe__skill-icon" />
                  <span className="aboutMe__skill-text">{skill.text}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        <motion.div
          className="aboutMe__text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="aboutMe__text-p">
            I’m a <span className="highlight">Frontend Developer</span> with a strong foundation in{" "}
            <span className="highlight">software testing</span>, backed by more than{" "}
            <span className="highlight">10 years</span> ensuring quality and reliability in digital products.
            I combine clean, maintainable code with intuitive UI design, always aiming to deliver{" "}
            <span className="highlight">responsive</span>, engaging, and performance-driven user experiences.
          </p>

          <p className="aboutMe__text-p">
            I’ve built real-world projects using{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">JavaScript</span>,{" "}
            <span className="highlight">HTML</span>, and{" "}
            <span className="highlight">CSS</span>, leveraging{" "}
            <span className="highlight">Git</span>,{" "}
            <span className="highlight">GitHub</span>, and{" "}
            <span className="highlight">Vite</span> for efficient workflows.
            Alongside development, I have several years of hands-on experience in{" "}
            <span className="highlight">digital marketing</span>, managing{" "}
            <span className="highlight">blogs</span> and{" "}
            <span className="highlight">YouTube channels</span>, which honed my skills in{" "}
            <span className="highlight">content creation</span>,{" "}
            <span className="highlight">SEO</span>, and{" "}
            <span className="highlight">audience engagement</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
