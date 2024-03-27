import '../App.css';


const LeftPanel = ({colors,  handleCategoryClick, active}) => {

  const colorCategories = [...new Set(colors.map(color => color.category))] 
  
  return (
 
    <div className="left-col-categories">
      <ul>
        {colorCategories.map((category) => {
           return <li 
           className={active === category ? 'active' : ''}
           key={category} onClick={() => 
            handleCategoryClick(category)
            }>
           {category}
           </li>;
        })}
      </ul>
    </div>
  );
};

export default LeftPanel;
