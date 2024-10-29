import {useState} from 'react';
import {Button, SafeAreaView, ScrollView, View, Text} from 'react-native';

import * as Sentry from '@sentry/react-native';

import {init, enableSentry, disableSentry} from './sentry';
import {getClient} from '@sentry/react-native';

init();

function App() {
  const [errorReportingEnabled, setErrorReportingEnabled] = useState(false);
  const options = getClient()?.getOptions();

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>
            Sentry enabled: {errorReportingEnabled ? 'True' : 'False'}
          </Text>

          <Button
            title={
              errorReportingEnabled
                ? 'Disable error reporting'
                : 'Enable error reporting'
            }
            onPress={() => {
              if (errorReportingEnabled) {
                disableSentry();
                setErrorReportingEnabled(false);
                return;
              }

              enableSentry();
              setErrorReportingEnabled(true);
            }}
          />

          <Button
            title="Throw error"
            onPress={() => {
              console.log(
                `throwing error, sentry enabled: ${errorReportingEnabled}`,
                Date.now().toString(),
              );
              Sentry.captureException(
                new Error(
                  `First error, sentry enabled: ${errorReportingEnabled} ${Date.now().toString()}`,
                ),
              );
            }}
          />
          <View>
            <Text>Sentry options:</Text>
            <Text>Enabled: {String(options?.enabled)}</Text>
            <Text>Sample rate: {options?.sampleRate}</Text>
            <Text>Traces sample rate: {options?.tracesSampleRate}</Text>
            <Text>
              Auto session tracking: {String(options?.autoSessionTracking)}
            </Text>
            <Text>
              Send client reports: {String(options?.sendClientReports)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
