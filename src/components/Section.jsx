import React from "react";
import './Section.css';


const Section = React.forwardRef(({ title, content }, ref) => {
  return (
    <section ref={ref} className="section-container">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index} className="text">{block.text}</p>;

            case "list":
              return (
                <ul key={index} className="section-content-list">
                  {block.items.map((item, i) => (
                    <li key={i} className="section-content-item text">{item}</li>
                  ))}
                </ul>
              );

            case "heading":
              return (
                <h3 key={index} className="section-content-heading">
                  {block.text}
                </h3>
              );

            case "image":
              return (
                <div key={index} className="section-content-image">
                  <img
                    src={block.src}
                    alt={block.alt || ""}
                    style={{ width: block.width || "100%" }}
                    className="content-image"
                  />
                  {block.caption && (
                    <p className="content-image-text description">
                      {block.caption}
                    </p>
                  )}
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </section>
  );
});


export default Section;