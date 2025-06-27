import React from 'react';
import '../styles/JobExperience.css'
// Define a type for a single job experience entry
type JobEntry = {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string[]; // Array of bullet points or paragraphs
};

const JobExperience: React.FC = () => {
  // Sample job experience data
  const jobExperiences: JobEntry[] = [
    {
      id: 'job1',
      title: 'Technical Analyst',
      company: 'Yngen Datacomm Corp',
      dates: 'Jan 2024 - Jan 2025',
      description: [
        'Conducting in-depth data analysis to identify trends, anomalies, and actionable insights that support strategic decision-making.',
        'Collaborating with cross-functional teams to translate business requirements into technical specifications and data-driven solutions.',
        'Optimizing data reporting processes, improving accuracy and efficiency of dashboards and performance metrics.',
        'Supporting system integration and troubleshooting by analyzing technical documentation and coordinating with developers and stakeholders.'
      ],
    },
  
 
    {
      id: 'job4',
      title: 'Freelance Web Developer',
      company: 'Upwork',
      dates: 'Jun 2017 - Present',
      description: [
        'Assisted in the design and implementation of responsive web layouts using HTML, CSS, and JavaScript.',
        'Optimized website performance for mobile devices, resulting in improved loading times.',
        'Collaborated with senior developers on various web projects, learning best practices in front-end development.'
      ],
    },
    {
      id: 'job5',
      title: 'Full Stack Developer',
      company: 'Small Businesses',
      dates: 'Project Based',
      description: [
        'Developed and maintained responsive web applications using HTML, CSS, JavaScript, and backend technologies like Node.js and Express.',
        'Integrated APIs and managed data flow between client-side interfaces and server-side logic.',
        'Worked on both front-end and back-end features, contributing to the full development lifecycle from planning to deployment.',
        'Collaborated with a small agile team, enhancing functionality and improving overall user experience through regular iterations.'
      ],
    },
    {
      id: 'job6',
      title: 'Freelance IT Consultant',
      company: 'Self-Employed',
      dates: 'Sep 2017 - Present',
      description: [
        'Provided ad-hoc IT support and basic web development services to small businesses.',
        'Managed client relationships and project timelines independently.',
        'Gained initial exposure to full-stack development and client requirements gathering.'
      ],
    },
  ];

  return (
    <>
   

      <section id="job-experience">
        <div className="job-experience-container">
          <div className="job-experience-header">
            <h1>My Professional Journey</h1>
            <p>
              Explore my career trajectory, highlighting key roles, responsibilities, and achievements that have shaped my expertise in Web development and project leadership.
            </p>
          </div>

          <div className="job-list">
            {jobExperiences.map((job) => (
              <div key={job.id} className="job-card">
                <div>
                  <h2>{job.title}</h2>
                  <h3>{job.company}</h3>
                  <p className="dates">{job.dates}</p>
                  <ul>
                    {job.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobExperience;
