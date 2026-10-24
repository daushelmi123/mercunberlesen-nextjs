import { ImageIcon } from "lucide-react";

/**
 * Slot gambar bertujuan — tunjuk dengan jelas "foto sebenar di sini".
 * Bila Firdaus bagi foto, ganti komponen ni dengan <Image />.
 */
export default function Placeholder({
  label,
  className = "",
  compact = false,
}: {
  label: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`photo-slot grid place-items-center ${className}`}>
      <div className="flex flex-col items-center gap-1.5 text-center px-3">
        <ImageIcon className={`text-red-bright/70 ${compact ? "w-5 h-5" : "w-7 h-7"}`} />
        {!compact && (
          <span className="text-[10px] uppercase tracking-wider text-white/45">Foto: {label}</span>
        )}
      </div>
    </div>
  );
}
