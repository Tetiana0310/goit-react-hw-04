import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
    const onSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const value = form.query.value;
    if (!value) {
      toast.error("Your search term is empty", {
        style: {
          color: "#ffffff",
          backgroundColor: "#ff6b6b",
        },
      });
      return;
    }
    onSubmit(value);
    form.reset();
  };
    return (<header>
  <form onSubmit={onSearch}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>) 
}