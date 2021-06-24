import React from 'react';

import { SplitFactory } from '@splitsoftware/splitio';


const SplitTest = ({ event }) => {

  const [splitClient, setSplitClient] = React.useState(null);
  const [eventFeatureEnabled, setEventFeatureEnabled] = React.useState(false);

  React.useEffect(() => {
    const factory = SplitFactory({ 
      core: {
        authorizationKey: 'in9qidn1upmnq6bi8ffums1tm5lakagp8jn0',
        key: event,
        trafficType: 'event'
      },
      startup: {
        readyTimeout: 1.5
      }
    });
    
    const client = factory.client();

    client.on(client.Event.SDK_READY, () => {
      setSplitClient(client);
    });
  }, [event]);

  React.useEffect(() => {
    const userObject = {
      account: `${event}000`,
      email: `${event}@bizzabo.com`,
      event: event
    };

    const isFeatureOn = splitClient && splitClient.getTreatment('eventFeature', userObject);
    setEventFeatureEnabled(isFeatureOn === 'on');

  }, [event, splitClient]);

  return <div style={{ border: '1px solid black', margin: '50px' }}>
    <h1>This is from Split.io</h1>
    <div>
    eventFeature is: <strong> { eventFeatureEnabled ? 'on' : 'off' } </strong>  for event: { event }
    </div>
  </div>;
};


export default SplitTest;