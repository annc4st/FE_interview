import "../App.css";

const LeftPanel = ({ colors, handleCategoryClick, active, selectedSwatch }) => {
  const colorCategories = [...new Set(colors.map((color) => color.category))];

  return (
    <div className="left-col-categories">
      <ul>
        {colorCategories.map((category) => {
          return (
            <li
              className={active === category ? "active" : null}
              key={category}
              onClick={selectedSwatch ? null : () => handleCategoryClick(category) } 
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftPanel;
