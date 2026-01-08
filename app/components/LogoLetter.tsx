// Option 4: Letter-Based Monogram Logo (C for CESLEAP)
export default function LogoLetter() {
  const accentColor = '#8b5cf6'; // Purple - change as needed
  
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        <svg width="48" height="48" viewBox="0 0 48 48" className="w-12 h-12">
          {/* Stylized "C" letter with AI elements */}
          <path 
            d="M 32 24 Q 32 12, 24 12 Q 16 12, 16 24 Q 16 36, 24 36 Q 32 36, 32 24" 
            fill="none" 
            stroke={accentColor} 
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* AI nodes inside C */}
          <circle cx="24" cy="18" r="2" fill={accentColor} />
          <circle cx="24" cy="24" r="2.5" fill={accentColor} />
          <circle cx="24" cy="30" r="2" fill={accentColor} />
          {/* Connection line */}
          <line x1="24" y1="18" x2="24" y2="30" stroke={accentColor} strokeWidth="1" opacity="0.5" />
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

