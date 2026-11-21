import React from "react";
import { createRoot } from "react-dom/client";
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Database, Server, GraduationCap, BriefcaseBusiness, ExternalLink, Menu, X } from "lucide-react";
import "./styles.css";

const projects = [
 {n:"01",name:"TaskFlow",kind:"Multi-role task management",status:"In development",desc:"A Django task management application planned around Admin, Manager, and Employee roles, authentication, and role-aware dashboards.",stack:["Python","Django","PostgreSQL","HTML","CSS"],github:"https://github.com/mirmohammadahad",demo:""},
 {n:"02",name:"Student Management System",kind:"Full-stack web application",status:"Completed",desc:"A student information system with student profiles, unique identifiers, department relationships, and profile management.",stack:["Python","Django","SQLite","HTML","CSS"],github:"https://github.com/mirmohammadahad/student-management-system",demo:""},
 {n:"03",name:"Personal Portfolio",kind:"Frontend project",status:"Live",desc:"A responsive personal portfolio website built to present my development skills, selected projects, and contact information.",stack:["React","JavaScript","CSS","Vite"],github:"https://github.com/mirmohammadahad",demo:""}
];
const skillGroups = [
 {icon:Code2,title:"Frontend",items:["HTML5","CSS3","JavaScript","React"]},
 {icon:Server,title:"Backend",items:["Python","Django","Django REST Framework"]},
 {icon:Database,title:"Database",items:["PostgreSQL","SQLite"]},
 {icon:BriefcaseBusiness,title:"Tools & Workflow",items:["Git","GitHub","VS Code","REST APIs"]}
];
function App(){
 const [open,setOpen]=React.useState(false);
 const links=["About","Skills","Projects","Experience","Contact"];
 return <div className="app">
  <header className="topbar"><a className="brand" href="#home"><b>A.</b> AHAD<span>/DEV</span></a>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
   <nav className={open?"nav show":"nav"}>{links.map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}<a className="nav-github" href="https://github.com/mirmohammadahad" target="_blank" rel="noreferrer">GitHub ↗</a></nav>
  </header>
  <main>
   <section className="hero section" id="home">
    <div className="hero-copy"><div className="availability"><i/> OPEN TO REMOTE OPPORTUNITIES</div><p className="eyebrow">HELLO, I'M</p>
     <h1>Mir Mohammad<br/><span>Ahad.</span></h1><h2>Python &amp; Django <em>Backend Developer</em></h2>
     <p className="intro">I build practical web applications and backend systems with Python and Django. I enjoy turning real problems into clean, reliable software.</p>
     <div className="actions"><a className="btn primary" href="#projects">Explore my work ↗</a><a className="btn secondary" href="#contact">Get in touch <Mail size={16}/></a></div>
     <div className="social"><a href="https://github.com/mirmohammadahad" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/mir-mohammad-ahad-4078b6385/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div>
    </div>
    <div className="hero-art"><div className="rings"/><div className="portrait"><img src="/ahad.jpg" alt="Mir Mohammad Ahad"/><div className="photo-label"><i/> Mir Mohammad Ahad <small>Backend Developer</small></div></div><div className="floating f1">✳ Python</div><div className="floating f2">◆ Django</div><div className="floating f3">↗ REST APIs</div></div>
    <a className="scroll" href="#about">— SCROLL TO EXPLORE</a>
   </section>
   <section className="section block" id="about"><div className="kicker">01 / ABOUT ME</div><div className="two-col"><h2 className="heading">Building the logic<br/>behind the <span>experience.</span></h2><div className="body-copy"><p>I'm a Computer Science and Engineering student at Bangladesh Army International University of Science and Technology (BAIUST), focused on backend web development.</p><p>My core tools are Python, Django, and Django REST Framework. I also work with HTML, CSS, JavaScript, and React, and I'm continuously improving my database and software engineering skills.</p><p>I value readable code, thoughtful problem-solving, and building applications that are useful in the real world.</p><div className="stats"><div><b>CSE</b><small>Undergraduate</small></div><div><b>Python</b><small>Backend focus</small></div><div><b>BAIUST</b><small>2024 — Present</small></div></div></div></div></section>
   <section className="section block" id="skills"><div className="kicker">02 / TOOLKIT</div><div className="section-head"><h2 className="heading">My technical <span>stack.</span></h2><p>Technologies I use to design, build, and improve web applications.</p></div><div className="skill-grid">{skillGroups.map(({icon:Icon,title,items})=><article className="skill" key={title}><Icon/><h3>{title}</h3><div>{items.map(s=><span key={s}>{s}</span>)}</div></article>)}</div></section>
   <section className="section block" id="projects"><div className="kicker">03 / SELECTED WORK</div><div className="section-head"><h2 className="heading">Projects that show<br/><span>how I think.</span></h2><p>A few projects that demonstrate my learning, practical skills, and development approach.</p></div><div className="project-list">{projects.map(p=><article className="project" key={p.n}><div className="project-no">{p.n}</div><div><div className="project-meta">{p.kind}<small>{p.status}</small></div><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div></div><div className="project-links"><a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>{p.demo&&<a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo"><ExternalLink/></a>}</div></article>)}</div><p className="note">Project descriptions and statuses are presented transparently. More work will be added as it is completed and deployed.</p></section>
   <section className="section block" id="experience"><div className="kicker">04 / BACKGROUND</div><h2 className="heading section-headline">Education &amp; <span>experience.</span></h2><div className="timeline">
    <article><GraduationCap/><div><small>2024 — PRESENT</small><h3>BSc in Computer Science &amp; Engineering</h3><p>Bangladesh Army International University of Science and Technology (BAIUST)</p></div></article>
    <article><BriefcaseBusiness/><div><small>INTERNSHIP</small><h3>Frontend Development Intern · INIT</h3><p>Internship experience in frontend development. Add exact dates, responsibilities, and outcomes before publishing.</p></div></article>
    <article><Code2/><div><small>ACHIEVEMENT</small><h3>BAIUST Hackathon · 2nd Place</h3><p>Recognized among participating teams for a collaborative problem-solving project.</p></div></article>
   </div></section>
   <section className="section contact" id="contact"><div className="kicker">05 / LET'S CONNECT</div><h2>Have a project or<br/>an opportunity in <span>mind?</span></h2><p>I'm interested in junior backend roles, internships, and opportunities to contribute to real-world software projects.</p><a className="btn primary" href="mailto:mdahad626675@gmail.com">Say hello <ArrowUpRight size={17}/></a><div className="contact-links"><a href="mailto:mdahad626675@gmail.com"><Mail/> mdahad626675@gmail.com</a><a href="https://github.com/mirmohammadahad" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://www.linkedin.com/in/mir-mohammad-ahad-4078b6385/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a></div></section>
  </main>
  <footer className="footer"><a className="brand" href="#home"><b>A.</b> AHAD<span>/DEV</span></a><small>Designed &amp; built by Mir Mohammad Ahad</small><a href="#home">Back to top ↑</a></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);