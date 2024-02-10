function Navigation(){
return (
    <nav className="container">
     <div className="nav-wrapper">
     <img src="/images/brand_logo.png"></img>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Menu</a></li>
        <li><a href="badges.html">Location</a></li>
        <li><a href="collapsible.html">contact</a></li>
      </ul>
      <button id="button">Login</button>
    </div>
  </nav>
);
}
export default Navigation;