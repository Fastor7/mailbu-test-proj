import React, { useEffect, useRef } from "react";
import {
  ArticleBig,
  ArticleMedium,
  ArticleMediumSmall,
  ArticleSmall,
} from "./article";

const Section = ({ sectionInfo }) => {
  console.log(sectionInfo);
  return (
    <div>
      <div className="title">
        <h1 className="header">{sectionInfo.sectionName}</h1>
      </div>

      <div className="container">
        <ArticleBig banner={sectionInfo.sectionData[0]} />
        <ArticleMedium articleimage={sectionInfo.sectionData[1]} />
        <ArticleMediumSmall article={sectionInfo.sectionData[2]} />

        <div className="snippets">
          {sectionInfo.sectionData.slice(2).map((item, index) => (
            <ArticleSmall key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
