import React from "react";
import { Button, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const EventsWelcome = () => {
  return (
    <div className="event-container">
      <div>
        <h1>Event Management</h1>
        <p>
          In our experience, no single event is identical to another, that’s why
          we treat every event as if it were new and we pay full attention as if
          building from scratch. We carefully assess the needs of a clients’
          event and offer solutions for its realisation, always with the
          client’s budget in mind.
        </p>
        <Button>let's handle it for you </Button>
      </div>
    </div>
  );
};

export default EventsWelcome;
