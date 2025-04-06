import React from "react";
import './Sidebar.css';

const Sidebar = ({ sections, onSelect }) => {
  return (
    <aside className="sidebar-container">
      <h3 className="sidebar-title">Разделы</h3>
      <ul className="sidebar-list">
        {sections.map((section) => (
          <li
            key={section.id}
            className="sidebar-list-item"
            onClick={() => onSelect(section.id)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;