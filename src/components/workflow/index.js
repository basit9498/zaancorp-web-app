import { playlistData } from "@/src/helper/workflowdata/platlistData";
import React from "react";

import WorkFlowPlaylist from "./WorkFlowPlaylist";
import WorkFlowStatus from "./WorkFlowStatus";

const Index = () => {
  return (
    <div className="workflow__index--div">
      <div>
        <WorkFlowStatus />
      </div>
      <div className="workflow__body--main">
        <div className="workflow__body">
          {playlistData?.map((activity) => {
            return <WorkFlowPlaylist data={activity} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
