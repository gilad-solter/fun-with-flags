import React from 'react';
import { withLDProvider, withLDConsumer } from 'launchdarkly-react-client-sdk';

const userKey = '789';

const LaunchDarklyTest = () => {
    
    
    return <div style={{ border: '1px solid black', margin: '50px' }}>
        <h1>
            This is Launch Darkly wrapper
        </h1>
        <InnerComponenetWrapper />    
    </div>
};

const LaunchDarklyTestWrapper = withLDProvider({
    clientSideID: '60be2087cafd2b0e04da8ce4',
    user: {
        'key': userKey,
        'name': 'Shlomtzion Queen',
        'email': 'gilad+1@bizzabo.com',
        custom: {
            eventId: '999',
            accountId: '666',
        }
    }
})(LaunchDarklyTest);


const InnerComponenet = ({ flags }) => {
    
    return <div>
        key: { userKey } <br/>
        new-feature is:
        {flags.newFeature ? ' on' : ' off'}
    </div>;
    
};

const InnerComponenetWrapper = withLDConsumer()(InnerComponenet);

export default LaunchDarklyTestWrapper;
