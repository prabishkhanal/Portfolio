import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 85 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'TypeScript', level: 80 },
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-xl font-light tracking-wider text-blue-400">SKILLS</h2>
          <h3 className="mt-2 text-4xl font-bold">Technical Expertise</h3>
          <p className="mt-4 text-gray-300">
            A comprehensive overview of my technical skills and proficiency levels 
            in various technologies and tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800"
            >
              <h4 className="text-xl font-bold mb-6">{category.title}</h4>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;