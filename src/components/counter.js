import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = ({ num }) => {
    return (
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
                <span className="text-white">
                    {isVisible ? (
                        <CountUp separator="," end={num} />
                    ) : (
                        <CountUp end={0} />
                    )}
                </span>
            )}
        </VisibilitySensor>
    );
};

export default Counter;
