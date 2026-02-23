"use client";

import React from "react";

export interface MarqueeImage {
    src: string;
    alt: string;
    href?: string;
    target?: string;
}

interface ThreeDMarqueeProps {
    images: MarqueeImage[];
    onImageClick?: (image: MarqueeImage, index: number) => void;
}

export const ThreeDMarquee: React.FC<ThreeDMarqueeProps> = ({
    images,
    onImageClick
}) => {
    // Create a larger set of images for the grid
    const gridImages = [...images, ...images, ...images, ...images, ...images, ...images];

    return (
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden select-none">
            {/* Isometric Grid Wrapper */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] md:w-[140%] h-[200%] md:h-[150%] flex justify-center items-center"
                style={{
                    perspective: "2000px",
                }}
            >
                <div
                    className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 animate-isometric-scroll"
                    style={{
                        transform: "rotateX(55deg) rotateZ(-35deg) skewX(10deg)",
                        transformStyle: "preserve-3d"
                    }}
                >
                    {gridImages.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => onImageClick?.(image, index)}
                            className="relative aspect-[1080/1350] w-48 md:w-64 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-900 group cursor-pointer transition-all duration-500 hover:scale-110 hover:border-[#d5900a]/50 hover:shadow-[#d5900a]/20"
                            style={{
                                backfaceVisibility: "hidden",
                                transform: "translateZ(0)"
                            }}
                        >
                            {image.href ? (
                                <a
                                    href={image.href}
                                    target={image.target}
                                    className="block w-full h-full"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </a>
                            ) : (
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                />
                            )}

                        </div>
                    ))}
                </div>
            </div>

            {/* Modern Glassy Fades */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-90" />
            </div>

            {/* Add custom CSS animation if not in globals */}
            <style jsx global>{`
        @keyframes isometric-scroll {
          0% {
            transform: rotateX(55deg) rotateZ(-35deg) skewX(10deg) translateY(0);
          }
          100% {
            transform: rotateX(55deg) rotateZ(-35deg) skewX(10deg) translateY(-25%);
          }
        }
        .animate-isometric-scroll {
          animation: isometric-scroll 40s linear infinite;
        }
      `}</style>
        </div>
    );
};
