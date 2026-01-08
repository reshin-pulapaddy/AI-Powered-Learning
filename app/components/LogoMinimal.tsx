// Option 2: Minimal Text-Only Logo (No Icon)
export default function LogoMinimal() {
  const accentColor = '#8b5cf6'; // Purple - change as needed
  
  return (
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
  );
}

