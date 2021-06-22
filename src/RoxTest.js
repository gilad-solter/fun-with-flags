import React from 'react';
import * as Rox from 'rox-browser';

const flagsInitial = {
    enableTutorial: new Rox.Flag(),
    aNewFeature: new Rox.Flag(),
    titleColors: new Rox.RoxString('White', ['White', 'Blue', 'Green', 'Yellow']),
    titleSize: new Rox.RoxNumber(12, [12, 14, 18, 24])
};

export default function RoxTest() {
    
    const [flags, setFlags] = React.useState(null);

    React.useEffect(() => {
        async function initRollout() {
            const options = {}          
            // // Register the flags with Rollout
            Rox.register('', flagsInitial);
            Rox.setCustomStringProperty('accountId', '123');
          
            // Setup the Rollout key
            await Rox.setup('60b5f1fc81b922063e523198', options);
        };
        
        initRollout().then(() => {
            setFlags(flagsInitial);
        });
        
    }, []);
    
    React.useEffect(() => {
        console.log('@@@ aNewFeature flag is: ', flags?.aNewFeature?.isEnabled());
    },[flags]);


    return <div>

        <div>
            
        </div>

        <h3>
            This is the second component
        </h3>
    </div>
}