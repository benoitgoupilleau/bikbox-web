const Raven = window.Raven;

Raven.config(process.env.SENTRY_DSN).install();

export default Raven;