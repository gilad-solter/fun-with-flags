import React from 'react';

import * as LDClient from "launchdarkly-js-client-sdk";

const LDTest = ({ event }) => {

  const [ldClient, setLdClient] = React.useState(null);
  const [accountFeatureEnabled, setAccountFeatureEnabled] = React.useState(false);

  React.useEffect(() => {
    const user = {
      key: event,
      name: `user in:${event}`,
      email: `${event}@bizzabo.com`,
      custom: {
          eventId: event,
          accountId: `${event}000`,
      }
    };
    const client = LDClient.initialize('60be2087cafd2b0e04da8ce4', user);
    
    client.on('ready', function () {
      setLdClient(client);
    });
  }, [event]);
    
  React.useEffect(() => {
    setAccountFeatureEnabled(ldClient && ldClient.variation('new-feature'));
  }, [ldClient]);

  return <div style={{ border: '1px solid black', margin: '50px' }}>
    <h1>This is from LaunchDarkly</h1>
    <div>
      newFeature is: <strong> {accountFeatureEnabled ? 'on' : 'off'} </strong> for event: { event }
    </div>
  </div>;
};


export default LDTest;