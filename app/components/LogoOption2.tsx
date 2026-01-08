// Alternative Logo Icon Design Option 2: Circuit Board Pattern
export default function LogoOption2() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" className="w-13 h-13">
      {/* Circuit board pattern - tech/AI aesthetic */}
      {/* Main circuit paths */}
      <rect x="10" y="10" width="32" height="32" rx="4" fill="none" stroke="#FF6B42" strokeWidth="2" opacity="0.3" />
      
      {/* Circuit nodes */}
      <circle cx="18" cy="18" r="3" fill="#FF6B42" />
      <circle cx="34" cy="18" r="3" fill="#FF6B42" />
      <circle cx="26" cy="26" r="4" fill="#FF6B42" />
      <circle cx="18" cy="34" r="3" fill="#FF6B42" />
      <circle cx="34" cy="34" r="3" fill="#FF6B42" />
      
      {/* Circuit connections */}
      <line x1="18" y1="18" x2="26" y2="22" stroke="#FF6B42" strokeWidth="2" />
      <line x1="34" y1="18" x2="26" y2="22" stroke="#FF6B42" strokeWidth="2" />
      <line x1="18" y1="34" x2="26" y2="30" stroke="#FF6B42" strokeWidth="2" />
      <line x1="34" y1="34" x2="26" y2="30" stroke="#FF6B42" strokeWidth="2" />
      
      {/* Central processing unit */}
      <circle cx="26" cy="26" r="2" fill="#FFFFFF" />
    </svg>
  );
}

