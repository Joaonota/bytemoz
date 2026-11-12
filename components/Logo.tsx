import Image from "next/image";

export function Logo({ className = "", size = 34 }: { className?: string; size?: number }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/images/bytemoz-mark.png" alt="" width={size} height={size} priority className="shrink-0" />
      <span className="text-[1.3rem] font-bold leading-none tracking-[-0.035em]">
        <span className="text-fg">Byte</span>
        <span className="text-accent-bright">moz</span>
      </span>
    </span>
  );
}
