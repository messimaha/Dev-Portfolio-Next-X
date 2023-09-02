import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Education
          </h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">
              MSES (2021-2024)
            </p>
            <p className="my-3">
              I am currently studying computer
              science engineering from the
              Moroccan School of Engineering
              Sciences
            </p>
          </div>{" "}
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer technician
            </h5>
            <p className="font-semibold">
              SST (2021-2024)
            </p>
            <p className="my-3">
              I am currently studying computer
              science engineering from superior
              school of technology
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="my-3 text-2xl font-bold">
            Experience
          </h5>
           
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              ALLIP | Internship | Web Developer{" "}
            </h5>

            <p className="my-3">
              Designed and developed a versatile
              web application for managing
              internal operations and client
              interactions. Utilized React.js for
              front-end and Firebase for back-end.
            </p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Lighthouse | Internship | Web
              Developer{" "}
            </h5>

            <p className="my-3">
              Built a hospital information system
              application for the International
              Mohammed University Hospital.
              Implemented front-end using React.js
              and back-end with Laravel.
            </p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Legrand | Internship | Web Developer{" "}
            </h5>

            <p className="my-3">
              Securely developed an expense
              commitment request application.
              Managed departmental communication,
              verified task feasibility, and
              ensured ongoing maintenance.
            </p>
          </div>
        </div>{" "}
         
          
 
     
         
        
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Language & Framework
          </h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">
            Tools & Softwares
          </h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
