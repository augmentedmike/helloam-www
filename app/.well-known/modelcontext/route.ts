import { NextResponse } from 'next/server';

/**
 * /.well-known/modelcontext — WebMCP manifest endpoint
 *
 * Serves the WebMCP tool manifest for AI agent discovery.
 * Next.js does not serve public/.well-known/ by default,
 * so we use a route handler instead.
 *
 * Source pattern: shared/webmcp/webmcp.ts webmcpManifest()
 */
export async function GET() {
  const manifest = {
    version: '1.0',
    site: 'helloam.bot',
    description:
      'AM — Digital worker platform for PMs, developers, and support teams. Join the waitlist, apply for early access, or contact the team.',
    tools: [
      {
        name: 'join_helloam_mailing_list',
        description:
          'Join the helloam.bot early access waitlist for AM digital worker platform',
        path: '/#waitlist',
      },
      {
        name: 'early_access_apply',
        description:
          'Apply for early access to the AM digital worker platform for teams',
        path: '/#pilot',
      },
      {
        name: 'check_helloam_availability',
        description:
          'Check available booking slots for helloam sessions',
        endpoint: '/api/slots',
        dynamic: true,
      },
      {
        name: 'contact_helloam',
        description: 'Send a contact message to the helloam team',
        endpoint: '/api/contact',
        dynamic: true,
      },
    ],
    support: {
      declarative: true,
      imperative: true,
    },
  };

  return NextResponse.json(manifest, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
