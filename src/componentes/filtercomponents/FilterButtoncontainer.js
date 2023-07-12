import FilterButton from "./Filter-Button";

const FilterButtonContainer = ({ children }) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
            <FilterButton/>
        </div>
    )
};


export default FilterButtonContainer