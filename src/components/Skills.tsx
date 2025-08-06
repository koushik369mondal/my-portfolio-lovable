import { Badge } from "@/components/ui/badge";

// Technology Icons Components
const TechIcons = {
  // Frontend
  HTML: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 17.56L16.07 16.43L16.62 10.33H9.38L9.2 8.3H16.8L17 6.1H7L7.56 12.43H14.44L14.12 15.43L12 16.03L9.88 15.43L9.76 13.83H7.68L7.92 16.43L12 17.56Z" fill="#E34F26"/>
      <path d="M1.5 1.5L3.3 20.5L12 23L20.7 20.5L22.5 1.5H1.5Z" stroke="#E34F26" strokeWidth="1" fill="none"/>
    </svg>
  ),
  CSS: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M1.5 1.5L3.3 20.5L12 23L20.7 20.5L22.5 1.5H1.5Z" stroke="#1572B6" strokeWidth="1" fill="none"/>
      <path d="M12 17.56L16.07 16.43L16.62 10.33H12V8.3H16.8L17 6.1H12V4H19L18.44 10.33L18 16.43L12 17.56V17.56Z" fill="#1572B6"/>
    </svg>
  ),
  JavaScript: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F7DF1E">
      <rect width="24" height="24" fill="#F7DF1E"/>
      <path d="M7.9 18.9C8.3 19.6 8.9 20.1 10 20.1C11 20.1 11.6 19.7 11.6 18.9V12.3H9.8V18.8C9.8 19.2 9.6 19.4 9.2 19.4C8.8 19.4 8.6 19.1 8.4 18.8L7.9 18.9ZM13.4 18.8C13.9 19.7 14.7 20.1 15.9 20.1C17.3 20.1 18.2 19.4 18.2 18.3C18.2 17.1 17.6 16.7 16.3 16.2L15.8 16C15.2 15.8 14.9 15.6 14.9 15.2C14.9 14.9 15.1 14.7 15.5 14.7C15.9 14.7 16.2 14.9 16.4 15.2L17.8 14.4C17.3 13.6 16.5 13.2 15.5 13.2C14.2 13.2 13.4 13.9 13.4 14.9C13.4 16.1 14 16.5 15.1 16.9L15.6 17.1C16.3 17.4 16.6 17.6 16.6 18C16.6 18.4 16.3 18.6 15.8 18.6C15.2 18.6 14.8 18.3 14.6 17.9L13.4 18.8Z" fill="#000"/>
    </svg>
  ),
  "React.js": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#61DAFB">
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      <path d="M12 1C15.5 1 18.5 2.5 20.5 5C22.5 7.5 23 10.5 22 13.5C21 16.5 18.5 18.5 15.5 19.5C12.5 20.5 9.5 20 7 18.5C4.5 17 3 14.5 3 12C3 9.5 4.5 7 7 5.5C9.5 4 12 3 12 1Z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
      <path d="M12 23C8.5 23 5.5 21.5 3.5 19C1.5 16.5 1 13.5 2 10.5C3 7.5 5.5 5.5 8.5 4.5C11.5 3.5 14.5 4 17 5.5C19.5 7 21 9.5 21 12C21 14.5 19.5 17 17 18.5C14.5 20 12 21 12 23Z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
    </svg>
  ),
  "Tailwind CSS": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#06B6D4">
      <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.56 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.19 8.76 16.59 8.15C15.61 7.15 14.44 6 12 6ZM7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.81 15.24 7.41 15.85C8.39 16.85 9.56 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.19 14.76 11.59 14.15C10.61 13.15 9.44 12 7 12Z"/>
    </svg>
  ),
  Bootstrap: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#7952B3">
      <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.956v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.095-1.663z"/>
      <path d="M2 5.5A2.5 2.5 0 014.5 3h15A2.5 2.5 0 0122 5.5v13a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 18.5v-13zM4.5 4A1.5 1.5 0 003 5.5v13A1.5 1.5 0 004.5 20h15a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0019.5 4h-15z"/>
    </svg>
  ),
  Vite: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M8.286 10.578L12 14.292L15.714 10.578L12 6.864L8.286 10.578Z" fill="#646CFF"/>
      <path d="M23.677 6.573L12.809 23.25C12.365 24.083 11.635 24.083 11.191 23.25L0.323 6.573C-0.121 5.74 0.244 4.75 1.132 4.75H22.868C23.756 4.75 24.121 5.74 23.677 6.573Z" fill="url(#vite-gradient)"/>
      <defs>
        <linearGradient id="vite-gradient" x1="6" y1="33" x2="235" y2="344" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF"/>
          <stop offset="1" stopColor="#BD34FE"/>
        </linearGradient>
      </defs>
    </svg>
  ),

  // Backend
  "Node.js": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#339933">
      <path d="M12 1.85C11.73 1.85 11.45 1.92 11.22 2.05L3.78 6.35C3.31 6.63 3 7.15 3 7.71V16.29C3 16.85 3.31 17.37 3.78 17.65L11.22 21.95C11.45 22.08 11.73 22.15 12 22.15C12.27 22.15 12.55 22.08 12.78 21.95L20.22 17.65C20.69 17.37 21 16.85 21 16.29V7.71C21 7.15 20.69 6.63 20.22 6.35L12.78 2.05C12.55 1.92 12.27 1.85 12 1.85Z"/>
    </svg>
  ),
  "Express.js": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l2.818 3.706z"/>
      <path d="M.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.394-3.153a.755.755 0 00-.112-.449C.955 14.049.680 12.813.002 11.576z"/>
    </svg>
  ),
  MongoDB: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#47A248">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
    </svg>
  ),
  "REST APIs": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF6B35">
      <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
      <path d="M2 17L12 22L22 17"/>
      <path d="M2 12L12 17L22 12"/>
    </svg>
  ),
  EJS: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#B4CA65">
      <path d="M4.5 6h15v2h-15V6zm0 4h15v2h-15v-2zm0 4h15v2h-15v-2z"/>
      <path d="M2 2v20h20V2H2zm18 18H4V4h16v16z"/>
    </svg>
  ),

  // Tools & Others
  "Git & GitHub": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F05032">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  ),
  Postman: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF6C37">
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117l-.584-.584-.12-.12c-.408-.408-.623-.591-.623-.591l2.976-2.976.879.879-2.403 2.154z"/>
    </svg>
  ),
  Java: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ED8B00">
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
    </svg>
  ),
  DSA: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#4A90E2">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z"/>
      <path d="M12 8V16M8 10L16 14M16 10L8 14"/>
    </svg>
  ),

  // Learning & Interests
  "MERN Stack": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#61DAFB">
      <circle cx="12" cy="12" r="2"/>
      <path d="M12 1C15.5 1 18.5 2.5 20.5 5C22.5 7.5 23 10.5 22 13.5C21 16.5 18.5 18.5 15.5 19.5C12.5 20.5 9.5 20 7 18.5C4.5 17 3 14.5 3 12C3 9.5 4.5 7 7 5.5C9.5 4 12 3 12 1Z" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  ),
  "Finance Tech": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#2ECC71">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
      <path d="M7 18C7 18 9 20 12 20S17 18 17 18"/>
    </svg>
  ),
  "Stock Market Analysis": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#E74C3C">
      <path d="M3 17L9 11L13 15L21 7"/>
      <path d="M21 7H15M21 7V13"/>
    </svg>
  ),
  "Green Tech": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#27AE60">
      <path d="M12 2L13.5 7.5L19 9L13.5 10.5L12 16L10.5 10.5L5 9L10.5 7.5L12 2Z"/>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  ),
  "Solar Tech": () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F39C12">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"/>
    </svg>
  ),
};

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Vite"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "EJS"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "Postman", "Java", "DSA"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Learning & Interests",
      skills: ["MERN Stack", "Finance Tech", "Stock Market Analysis", "Green Tech", "Solar Tech"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and fintech solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-elevated space-y-6 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.gradient}`} />
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = TechIcons[skill as keyof typeof TechIcons];
                  return (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="px-3 py-2 text-sm font-medium bg-secondary/80 hover:bg-secondary transition-all hover:scale-105 duration-200 flex items-center gap-2"
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms` }}
                    >
                      {IconComponent && <IconComponent />}
                      <span>{skill}</span>
                    </Badge>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>
        </div>
      </div>
    </section>
  );
}