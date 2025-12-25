"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Calendar, 
  Zap, 
  X, 
  Monitor, 
  ChevronRight, 
  ChevronLeft, 
  Image as ImageIcon 
} from "lucide-react"
import { useState, useMemo, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { projects } from "@/data/dummyData"

// --- DATA ARRAY ---
// Note: Maine 'image' ko 'images' array mein convert kar diya hai gallery ke liye


// --- MODAL COMPONENT (WITH GALLERY) ---
// --- 2. PROJECT MODAL COMPONENT ---
function ProjectModal({ project, onClose }: { project: (typeof projects)[0] | null; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);

  // Background scroll lock logic
  useEffect(() => {
    if (project) {
        setActiveImage(0);
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = 'unset';
    }
    return () => { document.documentElement.style.overflow = 'unset'; }
  }, [project]);

  if (!project) return null

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-0 sm:p-4 backdrop-blur-xl transition-all duration-300">
      {/* Global CSS for hiding scrollbars */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="bg-card w-full max-w-5xl max-h-screen sm:max-h-[92vh] overflow-y-auto sm:rounded-3xl border border-white/10 shadow-2xl relative no-scrollbar">
        
        {/* Header */}
        <div className="sticky top-0 z-50 flex items-center justify-between p-6 bg-card/80 backdrop-blur-xl border-b border-white/5">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Monitor className="text-primary h-6 w-6" /> {project.title}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-white/10 rounded-full transition-all bg-muted/50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 sm:p-10 space-y-10">
          
          {/* Gallery Section */}
          <div className="space-y-6">
            <div className="group relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/5 shadow-2xl">
              <img 
                src={project.images[activeImage]} 
                className="w-full h-full object-cover transition-all duration-500"
                alt="Main"
              />
              
              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={handlePrev} className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-primary transition-all">
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button onClick={handleNext} className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-primary transition-all">
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>

              <div className="absolute bottom-4 right-4">
                <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-white">
                  {activeImage + 1} / {project.images.length}
                </Badge>
              </div>
            </div>

            {/* Thumbnails Scroller */}
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-shrink-0 w-32 sm:w-44 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === index 
                    ? "border-primary ring-4 ring-primary/20 scale-95" 
                    : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="thumb" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h3 className="text-xl font-bold mb-4 text-primary">About the Project</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">{project.fullDescription}</p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-6 text-primary">Core Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map(f => (
                    <div key={f} className="flex items-center gap-4 bg-muted/20 p-5 rounded-2xl border border-white/5 hover:bg-muted/40 transition-all">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold">{f}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Metadata */}
            <div className="space-y-6">
              <div className="bg-muted/30 p-8 rounded-3xl border border-white/5 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-2 text-sm"><Calendar className="h-4 w-4"/> Duration</span>
                  <span className="font-bold">{project.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-2 text-sm"><Users className="h-4 w-4"/> Team Size</span>
                  <span className="font-bold">{project.team}</span>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs font-black mb-4 uppercase text-primary tracking-widest text-center">Stack</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map(t => (
                      <Badge key={t} variant="secondary" className="px-3 py-1 bg-white/5 border-none hover:bg-primary/20">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="w-full h-16 text-xl font-bold rounded-2xl group transition-all">
                Live Preview 
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- 3. MAIN PROJECTS PAGE ---
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const groupedProjects = useMemo(() => {
    return projects.reduce((acc, p) => {
      if (!acc[p.category]) acc[p.category] = [];
      acc[p.category].push(p);
      return acc;
    }, {} as Record<string, typeof projects>);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-24">
          <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic uppercase">
            Work.
          </h1>
          <p className="text-2xl text-muted-foreground border-l-2 border-primary pl-8 py-3 max-w-2xl leading-relaxed font-light">
            A showcase of digital products crafted with a focus on performance, 
            scalability, and exceptional user experience.
          </p>
        </div>

        {/* Categories and Cards */}
        <div className="space-y-48">
          {Object.entries(groupedProjects).map(([category, items]) => (
            <div key={category} className="space-y-16">
              <div className="flex items-end justify-between border-b border-white/5 pb-8">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">{category}</h2>
                <Badge variant="outline" className="text-primary font-mono px-4 py-1 border-primary/30">
                  {items.length} CASE STUDIES
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                {items.map((project) => (
                  <div 
                    key={project.id} 
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-muted mb-8 transition-all duration-700 shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                         <div className="h-20 w-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-all duration-500 font-bold">
                           VIEW
                         </div>
                      </div>
                    </div>
                    <div className="space-y-4 px-2">
                      <h3 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground line-clamp-2 text-lg leading-relaxed">{project.description}</p>
                      <div className="flex gap-4 pt-2">
                        {project.technologies.slice(0, 3).map(t => (
                           <span key={t} className="text-xs font-black uppercase tracking-widest text-primary/60">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Project Details */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      
      <Footer />
    </main>
  )
}