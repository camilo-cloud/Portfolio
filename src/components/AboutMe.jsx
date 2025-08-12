import "./AboutMe.css";
import { motion } from "framer-motion";
import aboutMe1 from "/src/assets/images/aboutMe1_optimized.jpg";

export default function AboutMe() {
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
          className="aboutMe__image-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={aboutMe1} alt="Profile" className="aboutMe__image" />
        </motion.div>

        <motion.div
          className="aboutMe__text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="aboutMe__text-p">
            I’m a <span className="highlight">Frontend Developer</span>{" "}
            with a strong foundation in{" "}
            <span className="highlight">software testing</span>, backed by more
            than <span className="highlight">10 years</span> ensuring quality
            and reliability in digital products. My approach blends clean,
            maintainable code with intuitive UI design, aiming to create smooth,
            engaging, and responsive user experiences.
          </p>
          <p className="aboutMe__text-p">
            I’ve built real-world projects using{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">JavaScript</span>,{" "}
            <span className="highlight">HTML</span>, and{" "}
            <span className="highlight">CSS</span>, leveraging{" "}
            <span className="highlight">Git</span>,{" "}
            <span className="highlight">GitHub</span>, and{" "}
            <span className="highlight">Vite</span> for efficient workflows. My
            experience in blog management and digital marketing has sharpened
            my understanding of user engagement and online visibility.
          </p>
          <p className="aboutMe__text-p">
            I’m currently seeking frontend development
            opportunities where I can bring value from day one, expand my
            skills, and help deliver impactful web solutions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
