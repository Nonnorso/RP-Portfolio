import Banner from "../components/Banner";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio (){
    return ( 
        <div>
          <Banner />

          <section className="Projects">
            <h2>Mes projets</h2>
            <ProjectCard />        
          </section>
        </div>
      );
}