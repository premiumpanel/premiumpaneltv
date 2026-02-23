"use client";

import { useLayoutEffect, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GSAPInit() {
    const pathname = usePathname();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // This ensures ScrollTrigger is aware of the initial page state
        ScrollTrigger.refresh();

        return () => {
            // Optional: Don't kill everything if we want to maintain state, 
            // but refresh is essential on change
        };
    }, []);

    // Handle scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        // Give the browser a moment to render then refresh ScrollTrigger
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
