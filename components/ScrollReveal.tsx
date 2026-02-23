"use client";

import { useEffect, useRef, useMemo, ReactNode, useLayoutEffect, isValidElement, cloneElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

interface ScrollRevealProps {
    children: ReactNode;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
    scrub?: boolean;
    stagger?: number;
}

const ScrollReveal = ({
    children,
    enableBlur = true,
    baseOpacity = 0,
    blurStrength = 4,
    containerClassName = '',
    textClassName = '',
    scrub = false,
    stagger = 0.12
}: ScrollRevealProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const splitTextRecursively = (node: ReactNode, parentKey: string = 'sr'): ReactNode => {
        if (typeof node === 'string') {
            return node.split(/(\s+)/).map((word, index) => {
                if (word.match(/^\s+$/)) return word;
                return (
                    <span className="word" key={`${parentKey}-w-${index}`} style={{ display: 'inline-block' }}>
                        {word}
                    </span>
                );
            });
        }
        if (Array.isArray(node)) {
            return node.map((child, i) => <span key={`${parentKey}-a-${i}`}>{splitTextRecursively(child, `${parentKey}-a-${i}`)}</span>);
        }
        if (isValidElement(node)) {
            const element = node as React.ReactElement<any>;
            const { children: nodeChildren, ...props } = element.props;
            return cloneElement(
                element,
                { ...props, key: `${parentKey}-e` },
                nodeChildren ? splitTextRecursively(nodeChildren, `${parentKey}-e`) : null
            );
        }
        return node;
    };

    const splitText = useMemo(() => splitTextRecursively(children), [children]);

    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    useIsomorphicLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Ensure GSAP and ScrollTrigger are ready
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const wordElements = el.querySelectorAll('.word');
            if (wordElements.length === 0) return;

            const animateIn = () => {
                // Initial reset to measure correctly
                gsap.set(wordElements, { clearProps: 'all' });

                // Group words into lines
                const lines: HTMLElement[][] = [];
                let currentLine: HTMLElement[] = [];
                let lastTop = -1;

                wordElements.forEach((word) => {
                    const htmlWord = word as HTMLElement;
                    const top = htmlWord.offsetTop;
                    if (lastTop !== -1 && top > lastTop + 5) {
                        lines.push(currentLine);
                        currentLine = [];
                    }
                    currentLine.push(htmlWord);
                    lastTop = top;
                });
                if (currentLine.length > 0) lines.push(currentLine);

                // Initial hidden state
                gsap.set(wordElements, {
                    opacity: baseOpacity,
                    y: scrub ? 0 : 30,
                    filter: enableBlur ? `blur(${blurStrength}px)` : 'none'
                });

                // Create individual ScrollTriggers for each line
                lines.forEach((line, index) => {
                    gsap.to(line, {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: scrub ? 1 : 0.8,
                        ease: scrub ? 'none' : 'power3.out',
                        delay: index * stagger,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 92%',
                            end: scrub ? 'bottom 20%' : undefined,
                            scrub: scrub,
                            toggleActions: scrub ? undefined : 'play none none none',
                            once: !scrub,
                        }
                    });
                });
            };

            // Using RequestAnimationFrame to ensure DOM is fully ready
            const rafId = requestAnimationFrame(() => {
                animateIn();
                ScrollTrigger.refresh();
            });

            return () => {
                cancelAnimationFrame(rafId);
            };

        }, containerRef);

        return () => ctx.revert();
    }, [enableBlur, baseOpacity, blurStrength, scrub, stagger, children]);

    return (
        <div ref={containerRef} className={`scroll-reveal-wrapper ${containerClassName}`}>
            <div className={`scroll-reveal-content ${textClassName}`}>{splitText}</div>
        </div>
    );
};

export default ScrollReveal;
