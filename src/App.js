import React from 'react';
import logo from './logo.svg';
import './App.css';

// import RoxTest from './RoxTest';
// import FlagsmithTest from './FlagsmithTest';
import SplitTest from './SplitTest';
import LaunchDarklyTest from './LDTest';

const events = {
  123: '123',
  456: '456',
  789: '789'
}

function App() {

  const [event, setEvent] = React.useState(events[123]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <nav>
        <button
          onClick={() => setEvent(events[123])}>
          Event {events[123]}
        </button> 
        <button
          onClick={() => setEvent(events[456])}>
          Event {events[456]}
        </button> 
        <button
          onClick={() => setEvent(events[789])}>
          Event {events[789]}
        </button>
        <div>
          eventId: {event}
        </div>
        <div>
          accountId: {event}000
        </div>
        <div>
          email: {event}@bizzabo.com
        </div>
      </nav>

      <SplitTest event={event} />
      <LaunchDarklyTest event={event} />

    </div>
  );
}

export default App;
