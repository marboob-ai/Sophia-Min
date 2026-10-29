import React, { useRef, useState } from 'react';
import './BorderGlow.css';

export interface BorderGlowProps {
  children: React.ReactNode;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  edgeSensitivity = 30,
  glowColor = '168 85 247',
  backgroundColor = 'rgba(255, 255, 255, 0.08)',
  borderRadius = 28,
  glowRadius = 60,
  glowIntensity = 1.8,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  className = '',
  style,
  onClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`border-glow-container ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        backgroundColor: backgroundColor,
        padding: '2px', // Space for the glowing border
        backgroundClip: 'padding-box',
        ...style,
      }}
    >
      {/* High-Visibility Border Glow Gradient Mask Layer */}
      <div
        className="border-glow-overlay"
        style={{
          borderRadius: `${borderRadius}px`,
          opacity: isHovered ? Math.min(1.0, glowIntensity) : 0.85,
          background: isHovered
            ? `radial-gradient(${glowRadius * 3}px circle at ${cursorPos.x}% ${cursorPos.y}%, ${colors[0] || '#c084fc'}, ${colors[1] || '#f472b6'}, ${colors[2] || '#38bdf8'}, transparent 85%)`
            : `linear-gradient(135deg, ${colors[0] || '#c084fc'} 0%, ${colors[1] || '#f472b6'} 50%, ${colors[2] || '#38bdf8'} 100%)`,
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          boxShadow: isHovered
            ? `0 0 ${glowRadius}px rgba(192, 132, 252, ${glowIntensity * 0.8}), 0 0 ${glowRadius * 1.5}px rgba(244, 114, 182, 0.5)`
            : `0 0 25px rgba(192, 132, 252, 0.6), 0 0 10px rgba(56, 189, 248, 0.4)`,
        }}
      />

      {/* Glassmorphic Content Wrapper */}
      <div
        className="border-glow-content"
        style={{
          borderRadius: `${borderRadius - 2}px`,
          backgroundColor: backgroundColor,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
