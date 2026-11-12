import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const Svg = ({ size = 24, children, ...props }: IconProps & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>{children}</svg>
);

export const logos: Record<string, (props: IconProps) => React.ReactNode> = {
  React: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.9" />
      <path d="M12 2.5c-2.2 0-4.1.7-5.5 1.8C5 5.5 4 7.2 4 9c0 1.7.9 3.4 2.5 4.7-1.6 1.3-2.5 3-2.5 4.7 0 1.8 1 3.5 2.5 4.5 1.4 1.1 3.3 1.8 5.5 1.8s4.1-.7 5.5-1.8c1.5-1 2.5-2.7 2.5-4.5 0-1.7-.9-3.4-2.5-4.7 1.6-1.3 2.5-3 2.5-4.7 0-1.8-1-3.5-2.5-4.5C16.1 3.2 14.2 2.5 12 2.5z" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      <path d="M5.5 6.5c1.2 2 3.2 3.5 6.5 3.5s5.3-1.5 6.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      <path d="M5.5 17.5c1.2-2 3.2-3.5 6.5-3.5s5.3 1.5 6.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      <path d="M12 2.5v19" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.3" />
    </Svg>
  ),
  Flutter: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <path d="M14.3 2.3L7.6 9l-3-3L1 9.7l6.6 6.6-3 3L8 22.7l9-9-3-3 3-3-2.7-2.7z" fill="currentColor" />
    </Svg>
  ),
  Laravel: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <path d="M4 2v11.5L10 18l6-4.5V6l-6 4.5V6L4 2zm0 11.5L10 18l6-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 18V6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 6L10 2 4 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  ),
  PHP: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 12V9h2l1 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 12l1-3h2l1 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 12V9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 12V9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  "Node.js": ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 22V12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </Svg>
  ),
  PostgreSQL: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6-1 1.5-1.5 3-1.5 4.5 0 .5.2 1 .5 1.5-.5.3-1 .5-1 .5s1 .5 2 .5c2 0 4-1 5.5-2.5 2.5.3 5.5-.2 6.5-1.5.8-1 .7-2.5 0-3.5-1-1.5-3-2-5-2v-1c0-3-1-6-5-6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7c-1 0-2 .5-2 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 5c1 0 1.5.5 1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  Supabase: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <path d="M11 2h5l-2 9h6L8 22l2-9H4l7-11z" fill="currentColor" />
    </Svg>
  ),
  AWS: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <path d="M6.5 17c-1.5 0-3-.5-4-1.5l1-1.5c.8.7 1.8 1 3 1 1 0 1.5-.3 1.5-.8 0-.4-.3-.6-1-.8l-1-.3c-1.5-.5-2.5-1.3-2.5-3 0-1.6 1.3-2.8 3.5-2.8 1.5 0 2.7.5 3.5 1.3l-1 1.5c-.7-.5-1.5-.8-2.5-.8-.8 0-1.2.3-1.2.7 0 .4.3.6 1 .8l1 .3c1.7.5 2.5 1.5 2.5 3 0 1.7-1.3 3-3.8 3z" fill="currentColor" />
      <path d="M12 18v-6.5h2V13c.5-1 1.5-1.8 3-1.8 2 0 3 1.2 3 3.3V18h-2v-3.5c0-1.2-.5-1.8-1.5-1.8s-2 .8-2 2V18h-2z" fill="currentColor" />
      <path d="M22 15.5c0-1.5 1-2.3 2.5-2.3 1 0 1.8.3 2.3 1l-1 1.5c-.3-.4-.8-.5-1.3-.5-.8 0-1.2.4-1.2 1 0 .7.5 1 1.2 1 .4 0 .8-.1 1-.3l.5 1.3c-.5.3-1 .5-1.8.5-1.8 0-3.2-1-3.2-2.8z" fill="currentColor" />
      <path d="M4 6h2v4H4V6zm0 5.5h2V13H4v-1.5z" fill="currentColor" />
    </Svg>
  ),
  Docker: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <path d="M2.5 13h2v-2h-2v2zm4 0h2v-2h-2v2zm-4-4h2V7h-2v2zm4 0h2V7h-2v2zm4 4h2v-2h-2v2zm-4-8h2V3h-2v2zm4 4h2V7h-2v2zm4 4h2v-2h-2v2z" fill="currentColor" />
      <path d="M17 9c0-2-1.5-3.5-3-4l-.5.5c.5 1 1 2 1 3.5 0 1-.3 1.8-.8 2.5h6c0-1.5-.8-2.5-2.7-2.5z" fill="currentColor" opacity="0.7" />
    </Svg>
  ),
  TypeScript: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 12H7v2h2.5v5h2v-5H13v-2h-2z" fill="currentColor" />
      <path d="M14 12v2h1.5v5h2v-5H19v-2h-5z" fill="currentColor" />
    </Svg>
  ),
  "Next.js": ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 17V8l-6 6V8l-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  ),
  Tailwind: ({ size }) => (
    <Svg size={size} viewBox="0 0 24 24">
      <path d="M12 4c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.8 2.2 1.6 1.1 1.2 2.4 2.6 5.2 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.8-2.2-1.6C15.8 5.2 14.5 4 12 4zM6 11.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.8 2.2 1.6 1.1 1.2 2.4 2.6 5.2 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.8-2.2-1.6C9.8 12.4 8.5 11.2 6 11.2z" fill="currentColor" />
    </Svg>
  ),
};
