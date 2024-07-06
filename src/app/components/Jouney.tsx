import Head from 'next/head';

const Journey = () => {
  const education = [
    {
      year: '2010 - 2012',
      title: 'Bachelor of Arts - Karachi University',
      description: 'Major Subjects Political Science & International Relation.'
    },
    {
      year: '2007 - 2011',
      title: 'Diploma in Textile Designing from Sadequien Institute of Arts',
      description: 'Subjects & Clases Weiving, History of Arts, Scatching, sculpture, Acrylic paint preparation, Screen exposing of, Fabric, Apparel, Upholstery, Cushion, Bedsheets, Designing Hot dyeing, Cold dyeing Proces, all kinds of Fabric Printing   .'
    },
    {
      year: '2005 - 2006',
      title: 'Diploma in Commerce - Commercial Education',
      description: 'Major Subjects Shorthand, Typing, Advance Acoounting.'
    },
    {
        year: '2003 - 2004',
        title: 'Pak German Technical High School - Computer science',
        description: 'Major Subjects Computer Science, Technical Drawing.'
    },
  ];

  const experience = [
    {
      year: '2019 - 2024',
      title: 'Karachi Development Authority',
      description: 'As a (I.T COnsultant, NetWork / Desktop Support Executive) on Contract Basis.Three Major Projects Digitalization Automation Of 1.Directorate Of Recoveries. 2.Directorate Of Land Management. 3.Directorate Of lines Area Redevelopment Project.'
    },
    {
      year: '2016 - 2018',
      title: 'Karachi Development Authority',
      description: 'Office Of The Executive Engineers As (Desktop Support executive) Directorate Of Estate & Enforcement (Submittion Of Compliance Of Honable Supreme Court) Removal Of Encroachment.'
    },

  ];

  return (
    <div className="min-h-screen flex justify-center text-justify items-center bg-gradient-to-b from-sky-950 to-sky-700">
      <div className="bg-transparent border-8 border-sky-700 rounded-lg p-8 shadow-lg text-white max-w-4xl w-[90%]">
        <h1 className="text-4xl font-bold mb-8 text-center">
          My <span className="text-blue-400">Journey</span>
        </h1>
        <div className="grid-auto-row gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {education.map((item, index) => (
              <div key={index} className="bg-sky-950 shadow-black/25 border-8 border-sky-700 rounded-lg p-4 mb-4 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-400 w-2 h-2 rounded-full mr-2"></div>
                  <span className="text-blue-400">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            {experience.map((item, index) => (
              <div key={index} className="bg-sky-950 text-wrap border-8  shadow-black/50 border-sky-700 rounded-lg p-4 mb-4 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-400 w-2 h-2 rounded-full mr-2"></div>
                  <span className="text-blue-400">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
