const Navbar = () => {
    return ( 
        <nav>
            <div id="logo">
               <a href="/"> <h1>Spotifai 🎵 </h1></a>
            </div>
            <div id="search-bar">
                <input type="search" placeholder="Search for music"/>
                <button>Search</button>
            </div>
            <div id="add-music">
                <a href="/">Add Music</a>
            </div>
        </nav>
     );
}
 
export default Navbar;