import React, { Component } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

class TawkMessenger extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <TawkMessengerReact propertyId='6565fc761db16644c55581a3' widgetId='1hgb64bud' />
            </div>
        );
    }
}

export default TawkMessenger;
