import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTAButtonProps {
    href: string;
    variant?: "primary" | "secondary" | "outline" | "whatsapp" | "amber";
    children: React.ReactNode;
    className?: string;
    icon?: boolean;
}

export default function CTAButton({
    href,
    variant = "primary",
    children,
    className,
    icon = true,
}: CTAButtonProps) {
    const baseStyles =
        "group/button relative inline-flex items-center justify-center overflow-hidden rounded-xl font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95";

    const variants = {
        primary:
            "bg-blue-600/30 backdrop-blur-lg px-6 py-2.5 text-white hover:shadow-2xl hover:shadow-blue-600/50 border border-white/20",
        secondary:
            "bg-white px-6 py-2.5 text-black hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/30 border border-white",
        outline:
            "bg-white/5 backdrop-blur-md px-6 py-2.5 text-white border border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5",
        whatsapp:
            "bg-[#25D366] px-6 py-2.5 text-black hover:text-white hover:bg-[#1DA851] hover:shadow-2xl hover:shadow-[#25D366]/50 border border-[#25D366] transition-colors duration-300",
        amber:
            "bg-gradient-to-r from-[#d5900a] to-amber-600 px-6 py-2.5 text-white shadow-lg shadow-amber-600/20 hover:shadow-amber-500/40 border border-white/10",
    };

    return (
        <Link
            href={href}
            className={cn(baseStyles, variants[variant], className)}
        >
            <span className="relative z-10 flex items-center justify-center">
                {variant === "whatsapp" && (
                    <img
                        src="/assets/images/common/whatsapp.svg"
                        alt="WhatsApp"
                        className="w-5 h-5 mr-2 brightness-100 group-hover:invert transition-all duration-300"
                    />
                )}
                {children}
                {icon && variant !== "whatsapp" && <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/button:translate-x-1" />}
            </span>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-12 bg-white/20 blur-[2px]" />
            </div>
        </Link>
    );
}
