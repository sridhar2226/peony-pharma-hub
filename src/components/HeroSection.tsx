import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";
import "../App.css";

const HeroSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [headlineRef, headlineVisible] = useScrollAnimation();
  const [subRef, subVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const neuronCount = 90;
    const neurons = Array.from({ length: neuronCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1 + Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 🌿 Gradient background matching your green brand
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0b3d2e"); // dark emerald
      gradient.addColorStop(1, "#064e3b"); // deep green
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 💡 Add glow effect for 3D look
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(163, 230, 53, 0.7)"; // lime-green glow

      // Update & draw neurons
      neurons.forEach((p) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          p.x += dx * 0.01;
          p.y += dy * 0.01;
        } else {
          p.x += p.dx;
          p.y += p.dy;
        }

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(163, 230, 53, 0.9)";
        ctx.fill();
      });

      // 🧠 Connect neurons with glowing lines
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(163, 230, 53, 0.5)";
      for (let i = 0; i < neuronCount; i++) {
        for (let j = i + 1; j < neuronCount; j++) {
          const p1 = neurons[i];
          const p2 = neurons[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(163, 230, 53, ${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Animated Neural Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-24">
        <h1
          ref={headlineRef}
          className={`text-4xl md:text-6xl font-bold text-white mb-3 leading-tight transition-all duration-1000 ${
            headlineVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Innovating Healthcare
          <br />
          <span>Through Scientific Excellence</span>
        </h1>

        <p
          ref={subRef}
          className={`text-lg md:text-xl text-white/80 mb-4 md:mt-4 mx-auto md:mx-0 leading-relaxed transition-all duration-1000 ${
            subVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          Leading pharmaceutical innovation with world-class quality standards,
          delivering life-saving medicines to patients globally through
          cutting-edge research and manufacturing excellence.
        </p>

        <div
          ref={ctaRef}
          className={`flex justify-center transition-all duration-1000 ${
            ctaVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <Button
            variant="secondary"
            size="lg"
            className="text-lg px-8 py-4 mb-4 min-w-[200px] group"
            onClick={() =>
              window.open(
                "https://preview--product-lane-shop.lovable.app/",
                "_blank"
              )
            }
          >
            Order Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
