import FilterButton from "./filtercomponents/Filter-Button";
import FilterContainer from "./filtercomponents/Filter-Container";
import FilterButtonContainer from "./filtercomponents/FilterButtoncontainer";
import ItemsLeft from "./filtercomponents/Item-left";

const Filter = ({ total,
    
    activeFilter,
    showallTodos,
    showActiveTodos,
    showCompletedTodos,
    handleClearComplete }) => {
    return (
        <FilterContainer>
            <ItemsLeft total={total} />
            
            <button onClick={()=> handleClearComplete()} className="ml-20 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-">
                Clear Completed
            </button>
        </FilterContainer>
    )
}


//<FilterButtonContainer>
//<FilterButton action={() => showallTodos()} active={activeFilter} filter='All' />
//<FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Active' />
//<FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed' />
//</FilterButtonContainer>
export default Filter;

