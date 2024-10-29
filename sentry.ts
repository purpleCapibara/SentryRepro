import {getClient, init as sentryInit} from '@sentry/react-native';

const DSN = 'ADD DSN BEFORE RUNNING THE APP';

export const init = () => {
  sentryInit({
    dsn: DSN,
    enabled: false,
    sampleRate: 0.0,
    tracesSampleRate: 0.0,
    autoSessionTracking: false,
    sendClientReports: false,
  });
};

export const enableSentry = () => {
  const options = getClient()?.getOptions();

  if (options) {
    options.enabled = true;
    options.sampleRate = 1.0;
    options.tracesSampleRate = 1.0;
    options.autoSessionTracking = true;
    options.sendClientReports = true;
  }
};

export const disableSentry = () => {
  const options = getClient()?.getOptions();

  if (options) {
    options.enabled = false;
    options.sampleRate = 0.0;
    options.tracesSampleRate = 0.0;
    options.autoSessionTracking = false;
    options.sendClientReports = false;
  }
};
