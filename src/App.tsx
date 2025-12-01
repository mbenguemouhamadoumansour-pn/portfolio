import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Code, Server, Cloud, ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS (EC2, S3, RDS, Lambda, VPC)", "Jenkins, GitLab, GitHub Actions", "Terraform, Ansible", "CI/CD Pipelines"]
    },
    {
      category: "Containers & Orchestration",
      icon: Server,
      items: ["Docker, DockerHub", "Kubernetes (Minikube)", "Container Security (Trivy)"]
    },
    {
      category: "Systèmes & Réseaux",
      icon: Server,
      items: ["Windows Server, Linux", "Cisco CCNA (ICND1, ICND2)", "VPN, VLAN, Pare-feu", "Active Directory, GPO"]
    },
    {
      category: "Monitoring & Sécurité",
      icon: Award,
      items: ["Prometheus, Grafana", "Nagios, Zabbix", "Sécurité réseau", "Veeam Backup"]
    },
    {
      category: "Développement",
      icon: Code,
      items: ["React.js, Node.js, Express.js", "MongoDB, SQL", "Tailwind CSS", "Bash, PowerShell"]
    },
    {
      category: "Virtualisation",
      icon: Server,
      items: ["VMware, Hyper-V", "Proxmox", "Infrastructure virtualisée"]
    }
  ];

  const projects = [
    {
      title: "Application Gestion Smartphones",
      description: "Site Fullstack pour la gestion de smartphones avec authentification, CRUD complet et interface moderne.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pipeline CI/CD Complet",
      description: "Pipeline automatisé : GitHub → SonarQube → Docker → DockerHub → Kubernetes avec IaC (Terraform/Ansible).",
      tech: ["Jenkins", "SonarQube", "Docker", "Kubernetes", "Terraform", "Ansible"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Infrastructure Monitoring & Security",
      description: "Système de monitoring et sécurité pour surveillance temps réel et détection de vulnérabilités.",
      tech: ["Prometheus", "Grafana", "Trivy", "Docker"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const experiences = [
    {
      title: "Technicien Informatique & Réseaux Certifié Lenovo",
      company: "Diffusion bureautique service Center",
      period: "Déc. 2023 – Actuellement",
      tasks: [
        "Administration serveurs Windows/Linux et virtualisation (VMware, Hyper-V)",
        "Configuration réseaux sécurisés (switches, routeurs, VPN, VLAN)",
        "Maintenance Lenovo et support technique niveau 2/3",
        "Monitoring avec Prometheus & Grafana"
      ]
    },
    {
      title: "Instructeur en Informatique",
      company: "CFP Bargny",
      period: "Avr. 2024 – Août 2024",
      tasks: [
        "Formation systèmes & réseaux, sécurité IT",
        "Création supports pédagogiques et TP",
        "Évaluation et suivi des apprenants"
      ]
    },
    {
      title: "Technicien Informatique",
      company: "Dakar, Sénégal",
      period: "Juil. 2023 – Janv. 2024",
      tasks: [
        "Support technique niveau 1 & 2",
        "Maintenance parc informatique",
        "Participation projets infrastructure IT"
      ]
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mouhamadou Mansour MBENGUE
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item === 'home' ? 'Accueil' : item === 'about' ? 'À propos' : item === 'skills' ? 'Compétences' : item === 'projects' ? 'Projets' : item === 'experience' ? 'Expérience' : 'Contact'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize hover:text-blue-400 transition-colors"
                >
                  {item === 'home' ? 'Accueil' : item === 'about' ? 'À propos' : item === 'skills' ? 'Compétences' : item === 'projects' ? 'Projets' : item === 'experience' ? 'Expérience' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
              MMM
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mouhamadou Mansour MBENGUE
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Ingénieur Cloud & DevOps | Admin Systèmes & Réseaux
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Spécialisé en infrastructure cloud AWS, automatisation DevOps et administration systèmes. 
            Certifié Lenovo, AWS et Cisco CCNA.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              Me Contacter
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              Voir mes projets
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/mbenguemouhamadoumansour-pn/projectJenkinsDocker_1" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mouhamadou-mansour-mbengue-27b562270/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mbenguemouhamadoumansour@gmail.com"
               className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              À Propos
            </span>
          </h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-6">
              Ingénieur Cloud et DevOps passionné par l'automatisation et l'optimisation des infrastructures IT. 
              Avec une double expertise en administration cloud AWS et en systèmes/réseaux traditionnels, 
              j'accompagne les organisations dans leur transformation digitale.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Fort d'une expérience pratique en maintenance d'infrastructures critiques et en déploiement de 
              solutions DevOps modernes, je maîtrise l'ensemble de la chaîne : de la configuration réseau au 
              déploiement automatisé sur Kubernetes, en passant par la sécurisation et le monitoring.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-400">Projets réalisés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-blue-400 mr-2">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Expérience Professionnelle
            </span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                    <p className="text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <span className="text-green-400 mr-2 mt-1">▸</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Formation</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <div className="font-semibold">Licence Professionnelle en Réseaux et Systèmes Informatiques</div>
                  <div className="text-sm text-gray-400">Institut Supérieur d'Informatique (2021-2024)</div>
                </li>
                <li>
                  <div className="font-semibold">AWS & DevOps</div>
                  <div className="text-sm text-gray-400">Orange Digital Center (2025)</div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Certifications</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <Award size={16} className="mr-2 mt-1 text-yellow-400" />
                  <span>AWS Certified Cloud Practitioner</span>
                </li>
                <li className="flex items-start">
                  <Award size={16} className="mr-2 mt-1 text-yellow-400" />
                  <span>Lenovo Service Technician</span>
                </li>
                <li className="flex items-start">
                  <Award size={16} className="mr-2 mt-1 text-yellow-400" />
                  <span>Oracle Cloud & Infrastructure 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <p className="text-center text-gray-300 mb-8">
              Intéressé par une collaboration ? N'hésitez pas à me contacter !
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a href="mailto:mbenguemouhamadoumansour@gmail.com" 
                 className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500">
                <Mail className="text-blue-400 mr-4" size={24} />
                <div className="overflow-hidden">
                  <div className="text-sm text-gray-400">Messagerie électronique</div>
                  <div className="text-gray-200 text-sm truncate">mbenguemouhamadoumansour@gmail.com</div>
                </div>
              </a>

              <a href="tel:+221777135818" 
                 className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500">
                <Phone className="text-green-400 mr-4" size={24} />
                <div>
                  <div className="text-sm text-gray-400">Téléphone</div>
                  <div className="text-gray-200">+221 77 713 58 18</div>
                </div>
              </a>

              <div className="flex items-center p-4 bg-gray-800 rounded-xl border border-gray-700">
                <MapPin className="text-red-400 mr-4" size={24} />
                <div>
                  <div className="text-sm text-gray-400">Localisation</div>
                  <div className="text-gray-200">Dakar, Sénégal</div>
                </div>
              </div>

              <a href="https://www.linkedin.com/in/mouhamadou-mansour-mbengue-27b562270/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500">
                <Linkedin className="text-blue-400 mr-4 flex-shrink-0" size={24} />
                <div className="overflow-hidden">
                  <div className="text-sm text-gray-400">LinkedIn</div>
                  <div className="text-gray-200 text-xs truncate">linkedin.com/in/mouhamadou-mansour-mbengue-27b562270/</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 Mouhamadou Mansour MBENGUE. Tous droits réservés.</p>
          <p className="text-sm mt-2">Conçu avec passion à Dakar, Sénégal 🇸🇳</p>
        </div>
      </footer>
    </div>
  );
}

export default App;