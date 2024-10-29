# To run this repro app make sure to provide DSN in sentry.ts

Repro steps:
1. Add DSN in `sentry.ts`
2. Run `yarn start` and `yarn ios` or `yarn android`
3. Open app on device or simulator
4. Throw errors using "Throw error" button with and without Sentry error reporting
5. Check if errors show up on Sentry Dashboard

Expected result:
Errors show up in Sentry Dashboard when it's enabled.

Actual result: 
Errors do not show on Sentry Dashboard no matter the setting.

If you uncomment `enabled` property in the entire `sentry.ts` file and only modify sample rates and other properties it seems to be working correctly. It is possible to change it during runtime without having to restart app's bundle.
