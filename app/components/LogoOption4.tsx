// Alternative Logo Icon Design Option 4: Modern Minimalist Symbol
export default function LogoOption4() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" className="w-13 h-13">
      {/* Minimalist geometric symbol */}
      {/* Outer square with rounded corners */}
      <rect x="10" y="10" width="32" height="32" rx="6" fill="none" stroke="#FF6B42" strokeWidth="2.5" opacity="0.4" />
      
      {/* Inner diamond */}
      <polygon 
        points="26,16 36,26 26,36 16,26" 
        fill="none" 
        stroke="#FF6B42" 
        strokeWidth="2"
      />
      
      {/* Central node */}
      <circle cx="26" cy="26" r="5" fill="#FF6B42" />
      <circle cx="26" cy="26" r="2.5" fill="#FFFFFF" />
      
      {/* Corner accent nodes */}
      <circle cx="16" cy="16" r="2" fill="#FF6B42" opacity="0.6" />
      <circle cx="36" cy="16" r="2" fill="#FF6B42" opacity="0.6" />
      <circle cx="36" cy="36" r="2" fill="#FF6B42" opacity="0.6" />
      <circle cx="16" cy="36" r="2" fill="#FF6B42" opacity="0.6" />
    </svg>
  );
}

