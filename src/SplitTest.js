import React from 'react';

import { SplitFactory } from '@splitsoftware/splitio';


const SplitTest = () => {

  const [splitClient, setSplitClient] = React.useState(null);
  const [accountFeatureEnabled, setAccountFeatureEnabled] = React.useState(false);

    React.useEffect(() => {
        const factory = SplitFactory({ 
          core: {
            authorizationKey: 'in9qidn1upmnq6bi8ffums1tm5lakagp8jn0',
            key: '123456'
          },
          startup: {
            readyTimeout: 1.5
          }
        });
        
        const client = factory.client();
    
        client.on(client.Event.SDK_READY, () => {
          setSplitClient(client);
        });
      }, []);
    
      React.useEffect(() => {
        const userObject = {
          account: '123456',
          email: 'gilad@bizzabo.com',
          event: '456'
        };
    
        setAccountFeatureEnabled(splitClient && splitClient.getTreatment('accountFeature', userObject));
    
      }, [splitClient]);

  return <div style={{ border: '1px solid black', margin: '50px' }}>
    <h1>This is from Split.io</h1>
    <div>
      accountFeature is: { accountFeatureEnabled ? 'on' : 'off' }
    </div>
  </div>;
};


export default SplitTest;