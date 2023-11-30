import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">MY LOCATION </h2>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.18380186008!2d106.71458897480525!3d10.797230489352806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a8abf4b8e1%3A0x1de6952abd0b45dd!2zSOG6u20gNjAyIMSQaeG7h24gQmnDqm4gUGjhu6csIFBoxrDhu51uZyAyMiwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700559867602!5m2!1svi!2s"
        width="800"
        height="600"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    );
  }
}

export default Gmap;
