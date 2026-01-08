// Alternative Logo Icon Design Option 3: Abstract Learning Symbol
export default function LogoOption3() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" className="w-13 h-13">
      {/* Abstract book/learning symbol with AI elements */}
      {/* Book shape */}
      <path 
        d="M 14 12 L 14 40 L 38 40 L 38 12 L 26 8 Z" 
        fill="none" 
        stroke="#FF6B42" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Pages/learning layers */}
      <line x1="20" y1="20" x2="32" y2="20" stroke="#FF6B42" strokeWidth="1.5" opacity="0.6" />
      <line x1="20" y1="26" x2="32" y2="26" stroke="#FF6B42" strokeWidth="1.5" opacity="0.6" />
      <line x1="20" y1="32" x2="32" y2="32" stroke="#FF6B42" strokeWidth="1.5" opacity="0.6" />
      
      {/* AI nodes on the book */}
      <circle cx="26" cy="16" r="2.5" fill="#FF6B42" />
      <circle cx="22" cy="38" r="2" fill="#FF6B42" />
      <circle cx="30" cy="38" r="2" fill="#FF6B42" />
      
      {/* Connection lines */}
      <line x1="26" y1="16" x2="22" y2="36" stroke="#FF6B42" strokeWidth="1" opacity="0.5" />
      <line x1="26" y1="16" x2="30" y2="36" stroke="#FF6B42" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

