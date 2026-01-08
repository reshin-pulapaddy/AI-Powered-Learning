export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      {/* AI Icon */}
      <div className="flex-shrink-0">
        <svg 
          viewBox="0 0 40 40" 
          fill="none"
          width="52" 
          height="52"
        >
          <rect x="10" y="10" width="20" height="20" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
          <rect x="15" y="15" width="10" height="10" rx="1.5" fill="#FF6B42" />
          <circle cx="20" cy="20" r="2.5" fill="white" />
          <line x1="14" y1="10" x2="14" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="10" x2="20" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="26" y1="10" x2="26" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14" y1="30" x2="14" y2="35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="30" x2="20" y2="35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="26" y1="30" x2="26" y2="35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="14" x2="5" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="20" x2="5" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="26" x2="5" y2="26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="30" y1="14" x2="35" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="30" y1="20" x2="35" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="30" y1="26" x2="35" y2="26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="5" cy="5" r="1.5" fill="#FF6B42" />
          <circle cx="35" cy="5" r="1.5" fill="#FF6B42" />
          <circle cx="5" cy="35" r="1.5" fill="#FF6B42" />
          <circle cx="35" cy="35" r="1.5" fill="#FF6B42" />
        </svg>
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-0">
          <span className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', letterSpacing: '-0.02em' }}>
            CESLEAPAcademy
          </span>
          <span className="text-2xl md:text-3xl font-bold text-[#FF6B42] tracking-tight leading-tight" style={{ letterSpacing: '-0.02em' }}>
            .AI
          </span>
        </div>
        <span className="text-[10px] md:text-[12px] font-normal tracking-[0.15em] text-white uppercase mt-1" style={{ letterSpacing: '0.12em', opacity: 0.9 }}>
          DIGITAL LEARNING PLATFORM
        </span>
      </div>
    </div>
  );
}
