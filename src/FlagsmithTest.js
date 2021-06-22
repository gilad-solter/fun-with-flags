import React from 'react';
import flagsmith from 'flagsmith';

export default function () {

    const [hasFlags, setHasFlags] = React.useState(false);
    const [initDone, setInitDone] = React.useState(false);

    React.useEffect(() => {
        !initDone && flagsmith.init({
            environmentID:"6xsiEw8AkfVX8n4yBQvETQ",
            onChange: (oldFlags, params) => {
                if (initDone) return;
                setHasFlags(true);
                setInitDone(true);
            }
        });
    }, []);
    
    React.useEffect(() => {
        
        if (initDone) {
            flagsmith.identify('gilad@bizzabo.com');
            flagsmith.setTrait('eventId', 123);
            console.log('newfeature enabled: ', flagsmith.getValue('newfeature'), flagsmith.hasFeature('newfeature'));
        }

    }, [initDone]);


    return <h1>This is from FlagsSmith</h1>;
}