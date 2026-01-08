// Option 3: Abstract Geometric Logo
export default function LogoGeometric() {
  const accentColor = '#8b5cf6'; // Purple - change as needed
  
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        <svg width="48" height="48" viewBox="0 0 48 48" className="w-12 h-12">
          {/* Abstract geometric shape - represents AI/tech */}
          <path 
            d="M 24 4 L 40 12 L 40 28 L 24 36 L 8 28 L 8 12 Z" 
            fill="none" 
            stroke={accentColor} 
            strokeWidth="2"
            opacity="0.6"
          />
          <path 
            d="M 24 12 L 32 16 L 32 24 L 24 28 L 16 24 L 16 16 Z" 
            fill={accentColor} 
            opacity="0.3"
          />
          <circle cx="24" cy="20" r="4" fill={accentColor} />
          <circle cx="24" cy="20" r="2" fill="#FFFFFF" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-0">
          <span className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', letterSpacing: '-0.02em' }}>
            CESLEAPAcademy
          </span>
          <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight" style={{ color: accentColor, letterSpacing: '-0.02em' }}>
            .AI
          </span>
        </div>
        <span className="text-[10px] md:text-[12px] font-normal tracking-[0.15em] text-gray-300 uppercase mt-1" style={{ letterSpacing: '0.12em' }}>
          DIGITAL LEARNING PLATFORM
        </span>
      </div>
    </div>
  );
}

