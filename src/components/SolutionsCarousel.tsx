import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cloudVirtualization from "@/assets/cloud-virtualization.jpg";
import automationCenter from "@/assets/automation-center.jpg";
import omnichannelHub from "@/assets/omnichannel-hub.jpg";
import documentManagement from "@/assets/document-management.jpg";
import managementDashboard from "@/assets/management-dashboard.jpg";
import crmInterface from "@/assets/crm-interface.jpg";

const solutions = [
  {
    id: 1,
    image: cloudVirtualization,
    title: "Cloud & Virtualização",
    description: "Soluções robustas de cloud computing"
  },
  {
    id: 2,
    image: automationCenter,
    title: "Automações",
    description: "Automatize processos complexos"
  },
  {
    id: 3,
    image: omnichannelHub,
    title: "Comunicação Omnichannel",
    description: "Integre todos os canais de comunicação"
  },
  {
    id: 4,
    image: documentManagement,
    title: "Gerenciador de Documentos",
    description: "Organize e gerencie documentos"
  },
  {
    id: 5,
    image: managementDashboard,
    title: "Painéis Gerenciais",
    description: "Dashboards inteligentes em tempo real"
  },
  {
    id: 6,
    image: crmInterface,
    title: "CRM",
    description: "Gestão completa de relacionamento"
  }
];

const SolutionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex >= solutions.length) return 0;
      if (nextIndex < 0) return solutions.length - 1;
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 z-10" />
      
      {/* Carousel Container */}
      <div className="relative w-full h-full perspective-1000">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              rotateY: { duration: 0.8, ease: "easeInOut" },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full h-full group">
              {/* Image with extraordinary effects */}
              <img
                src={solutions[currentIndex].image}
                alt={solutions[currentIndex].title}
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Overlay with glowing effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Content overlay */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 text-white z-20"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {solutions[currentIndex].title}
                </h3>
                <p className="text-gray-200 text-lg">
                  {solutions[currentIndex].description}
                </p>
              </motion.div>

              {/* Holographic border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-purple-500/50 via-blue-500/50 to-pink-500/50 animate-pulse" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white shadow-lg shadow-white/50"
                : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 blur-xl -z-10 animate-pulse" />
    </div>
  );
};

export default SolutionsCarousel;