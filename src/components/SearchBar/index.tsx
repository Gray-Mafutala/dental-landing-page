type SearchBarProps = {
    addStyles?: string;
  };
  
  const SearchBar = ({ addStyles = "" }: SearchBarProps) => {
    return (
      <div
        className={`${addStyles} flex justify-between gap-x-5 bg-white
        border border-[#eee] rounded-2xl max-w-[440px] h-[60px] py-2 pl-4 pr-2
        focus-within:shadow-[0_0_0_2px_#583fbc] duration-300`}
      >
        <input
          type="search"
          placeholder="Search article or news..."
          className="w-full text-base font-medium text-violet-dark
          placeholder-text-violet-dark/60 outline-none"
        />
  
        <button
          className="bg-violet rounded-xl text-sm text-white flex py-2 px-3
          items-center text-center gap-x-2 border-2 border-transparent hover:bg-white
          hover:border-violet hover:text-violet font-semibold whitespace-nowrap
          active:scale-95 duration-300 ease-in"
        >
          <span>Search</span>
  
          <svg className="w-4 h-4 fill-none">
            <circle
              cx="7.844"
              cy="7.844"
              r="5.992"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-[1.5] stroke-current"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.012 12.323 2.35 2.344"
              className="stroke-[1.5] stroke-current"
            />
          </svg>
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  