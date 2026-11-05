/**
 * @type {import('next').NextConfig}
 */

// PAKET-P6 B1: old Stackbit URLs → V2. Explicit 301 (Next's `permanent: true` would send 308).
// The old pages themselves are in _legacy/content/pages/. Trailing slash stays on (`trailingSlash: true`),
// so canonical URLs end in `/`; Next answers the slash-less form with its own 308 to the slashed one.
const MOVED = [
    ['/clinic', '/sistemler/clinic-os/'],
    ['/brokers-brain', '/sistemler/brokers-brain/'],
    ['/signup', '/'],
    ['/pricing', '/'],
    ['/careers', '/']
];

const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    async redirects() {
        return MOVED.flatMap(([source, destination]) => [
            { source, destination, statusCode: 301 },
            { source: `${source}/`, destination, statusCode: 301 }
        ]);
    }
};

module.exports = nextConfig;
