import React from "react";

interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

const Map: React.FC<IMap> = ({mapType, mapTypeControl = false}) => {
    return (
        <div>This is map components</div>
    );
}

export default Map;