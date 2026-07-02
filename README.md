# Portfolio Webapp

This is a personal website built with React and deployed using an automated CI/CD pipeline connected to Cloudflare Pages.

The application is served as a static single-page app and distributed through Cloudflare’s global CDN, ensuring low-latency access worldwide. DNS and routing are fully managed through Cloudflare, with support for both apex and www domains and automatic HTTPS enforcement.

## Developer Instructions

To run the project locally:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment

Any change to the main branch will start the deployment workflow.

## Monitoring

This site is monitored using UptimeRobot.

- Checks: every 24 hours
- Alerting: email notifications on downtime + recovery
- Purpose: detect outages and SSL / deployment failures
