import { useEffect, useState } from "react";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/YOUR_USERNAME",
    color: "#E1306C",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/YOUR_USERNAME",
    color: "#1877F2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/YOUR_USERNAME",
    color: "#000000",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function SocialSidebar() {
  const [navHeight, setNavHeight] = useState(64);

  useEffect(() => {
    const navbar = document.querySelector("nav") || document.querySelector("header");
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "16px",
        top: `${navHeight + 16}px`,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 999,
      }}
    >
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          title={s.name}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: s.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            transition: "transform 0.18s ease",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(-5px) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0) scale(1)";
          }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}