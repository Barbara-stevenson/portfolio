"use client";

const categories = ["Fin Tech", "Health Tech", "Digital Media", "Marketing Sites"];

interface CategoryPillsProps {
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryPills({ active, onChange }: CategoryPillsProps) {
  return (
    <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`whitespace-nowrap rounded-full text-[14px] font-medium transition-colors ${
            active === cat
              ? "px-[20px] py-[11px] md:px-[36px] md:py-[10px] text-[#2A1F0E] border-[1.5px] border-[#5C4A2F]"
              : "px-[20px] py-[11px] md:px-[36px] md:py-[10px] bg-transparent text-pill-text border-[1.5px] border-[#5C4A2F]/40 hover:border-[#5C4A2F]/70"
          }`}
          style={active === cat ? { backgroundColor: "#CA9550" } : {}}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
