// app/api/menu/route.ts

import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const notionDropdown = [
    {
      title: 'Features',
      items: [
        { label: 'Notion AI', desc: 'Build, write, automate' },
        { label: 'Docs', desc: 'Simple & powerful' },
        { label: 'Wikis', desc: 'Centralize your knowledge' },
        { label: 'Projects', desc: 'Manage any project' },
      ],
    },
    {
      title: '',
      items: [
        { label: 'Enterprise Search', desc: 'Find answers instantly', badge: 'New' },
        { label: 'AI Meeting Notes', desc: 'Perfectly written by AI', badge: 'New' },
        { label: 'Forms', desc: 'Responses and requests' },
        { label: 'Sites', desc: 'Publish anything, fast' },
      ],
    },
    {
      title: 'Get started',
      items: [
        { label: 'Browse marketplace', desc: 'Templates for everything' },
        { label: 'View integrations', desc: 'Connect your apps with Notion' },
        { label: 'Download web clipper', desc: 'Save from the web into Notion' },
      ],
    },
  ];

  const navLinks = [
    { label: 'Notion', hasDropdown: true },
    { label: 'Mail' },
    { label: 'Calendar' },
    { label: 'AI' },
    { label: 'Enterprise' },
    { label: 'Pricing' },
    { label: 'Explore', hasDropdown: false },
    { label: 'Request a demo', hasDropdown: false }
  ];

  return new Response(JSON.stringify({ notionDropdown, navLinks }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
