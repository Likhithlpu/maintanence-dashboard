const Air = () => {
    return (    <div className="home-page">
    <iframe src="https://smartcitylivinglab.iiit.ac.in/grafana/d/f81d3e9d-84c6-43e5-a1e6-f4ba76bbcf6b/page-dashboard?&kiosk&autofitpanels&orgId=1" width="100%" height="100%" frameborder="0"></iframe>
</div>);
};

const Default = () => {
    return <div>This is Default page</div>;
};

const Energy = () => {
    return (<div>Hello <br></br>Hello COmes here <br></br>This is Energy Monitoring page</div>);
};

const Solar = () => {
    return <div>This is Solar page</div>;
};

const SmartRooms = () => {
    return <div>This is Smart Rooms page</div>;
};

const Weather = () => {
    return <div>This is Weather Monitoring Page</div>;
};

const Water = () => {
    return <div>This is Water Monitoring page</div>;
};

const Crowd = () => {
    return <div>This is Crowd Monitoring page</div>;
};

const Wisun = () => {
    return <div>This is Wisun page</div>;
};

export {Default,Air,Energy,Solar,SmartRooms,Weather,Water,Crowd,Wisun};