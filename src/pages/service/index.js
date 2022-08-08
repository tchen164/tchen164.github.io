import React from "react";
import { Scene, HeatmapLayer, PointLayer } from "@antv/l7";
import { Mapbox } from "@antv/l7-maps";
import "./style.css";
export default class Service extends React.Component {
  componentDidMount() {
    const scene = new Scene({
      id: "mapme",

      map: new Mapbox({
        style: "normal",
        pitch: 0,
        center: [0, 51.445038892195569],
        zoom: 12,
      }),
    });

    // scene.on("loaded", () => {
    //   fetch(
    //     "https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json"
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       scene.addImage(
    //         "00",
    //         "https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg"
    //       );
    //       scene.addImage(
    //         "01",
    //         "https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg"
    //       );
    //       scene.addImage(
    //         "02",
    //         "https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg"
    //       );
    //       console.log("datatatatat:", data);
    //       const imageLayer = new PointLayer()
    //         .source(data, {
    //           parser: {
    //             type: "json",
    //             x: "longitude",
    //             y: "latitude",
    //           },
    //         })
    //         .shape("name", ["00", "01", "02"])
    //         .size(25);
    //       scene.addLayer(imageLayer);
    //     });
    // });
  }

  render() {
    return (
      <div>
        <div className="searchinput">
          <input
            type="text"
            class="form-control"
            placeholder="Please input your position"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div></div>
        <div className="mapbox">
          <div id="mapme"></div>
        </div>
      </div>
    );
  }
}
