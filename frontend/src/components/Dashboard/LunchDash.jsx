import "./LunchDash.css";

const Lunch = () => {
  return (
    <form action="http://localhost:5173/dashboard" method="get" class="lunch-form">
      <div className="search-lunch">
        <label for="search">Search For Lunch</label>
        <input type="search" placeholder="Search Foods..." />
        
        <div class="serving">
          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            id="servings"
            min="1"
            placeholder="Enter servings number"
            required
          />
        </div>
        <div class="serving-size box">
          <label htmlFor="serving-size" name="serving-size">
            Serving Size:
          </label>
          <select id="serving sizes" name="servings sizes">
          <option value="select">Select...</option>
          <option value="grams">Grams</option>
          <option value="cups">Cups</option>
          <option value="ounces">Ounces</option>
          <option value="slices">Slices</option>
          </select>
        </div>
      </div>
      <input type="submit" value="Add" />
    </form>
  );
};

export default Lunch;
