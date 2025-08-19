'use client'

import { useEffect, useRef } from 'react';

const useCustomAnalytics = () => {
  const interactionCounts = useRef<{ [key: string]: number }>({});
  const pageViews = useRef(0);

  useEffect(() => {
    function saveMetrics() {
      try {
        const data = {
          pageViews: pageViews.current,
          interactions: interactionCounts.current,
        };
        localStorage.setItem('customAnalytics', JSON.stringify(data));
      } catch {}
    }

    function logPageView() {
      pageViews.current++;
      const event = {
        type: 'pageview',
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      };
      console.log('[Analytics] Page View:', event);
      saveMetrics();
    }

    function logInteraction(label: string, link: string, interactionType: string) {
      const key = `${label}|${interactionType}`;
      interactionCounts.current[key] = (interactionCounts.current[key] || 0) + 1;

      const event = {
        type: 'interaction',
        label,
        link,
        interactionType,
        timestamp: new Date().toISOString(),
      };
      console.log('[Analytics] Interaction:', event);
      saveMetrics();
    }

    function handleInteraction(e: Event, type: 'click' | 'hover') {
      const target = e.target as HTMLElement;
      // find closest element with data-analytics-label
      const element = target.closest('[data-analytics-label]') as HTMLElement | null;
      if (!element) return;

      const label = element.getAttribute('data-analytics-label') || '';
      const link = (element as HTMLAnchorElement).href || '';
      if (label) logInteraction(label, link, type);
    }

    function logSummary() {
      try {
        const data = localStorage.getItem('customAnalytics');
        console.log(
          '[Analytics] Summary on unload:',
          data ? JSON.parse(data) : null
        );
      } catch {}
    }

    // Attach listeners
    window.addEventListener('load', logPageView);
    document.addEventListener('click', (e) => handleInteraction(e, 'click'));
    document.addEventListener('mouseover', (e) => handleInteraction(e, 'hover'));
    window.addEventListener('beforeunload', logSummary);

    return () => {
      window.removeEventListener('load', logPageView);
      document.removeEventListener('click', (e) => handleInteraction(e, 'click'));
      document.removeEventListener('mouseover', (e) => handleInteraction(e, 'hover'));
      window.removeEventListener('beforeunload', logSummary);
    };
  }, []);
};

export default useCustomAnalytics;
