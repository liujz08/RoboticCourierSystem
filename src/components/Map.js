import GoogleMapReact from 'google-map-react';
import React from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export class Map extends React.Component{
    constructor(props){
        super(props);
       // this._onClick = this._onClick.bind(this);
    }
    static defaultProps = {
      center: {
        lat: 37.773972,
        lng: -122.431297
      },
      zoom: 13,
        firstStation:{
          lat:37.793321,
          lng:-122.422794
        },
        secondStation:{
          lat:37.754538,
            lng:-122.407157
        },
        thirdStation:{
          lat: 37.757644,
            lng:-122.436165
        }
    };
    // _onClick = ({x, y, lat, lng, event, map, maps}) => {
    //     let marker = new maps.Marker({position: { lat: lat, lng:lng},map,title:'Hello World'})}
    renderMarkers(map, maps) {
        let first = new maps.Marker({
            position: this.props.firstStation,
            map,
            title: 'Hello World!'
        });
        let second = new maps.Marker({
            position: this.props.secondStation,
            map,
            title: 'Hello World!'
        });
        let third = new maps.Marker({
            position: this.props.thirdStation,
            map,
            title: 'Hello World!'
        });
    }
    render() {
        const greatPlaceStyle = {
            position: 'absolute',
        }
        return (
            <div className="container" >
                <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                                 onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />

                        {/*{this.props.text}*/}

                </GoogleMapReact>

            </div>

        );
    }
}