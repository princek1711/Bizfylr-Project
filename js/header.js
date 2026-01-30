const Header = () => {
  return `
  <header class="glass" style="margin:20px;">
    <nav class="container" style="display:flex;align-items:center;justify-content:space-between;">
      
      <div class="logo">
        <strong style="font-size:22px;">BIZFYLR</strong>
      </div>

      <ul class="menu" style="display:flex;gap:30px;list-style:none;align-items:center;">
        <li><a href="index.html">Home</a></li>

        <li class="mega-parent">
          <a href="services.html">Services</a>

          <div class="mega-menu glass">
            <div>
              <h4>Global Expansion</h4>
              <a href="#">US Company Registration</a>
              <a href="#">UK Company Setup</a>
              <a href="#">UAE Business Setup</a>
            </div>
            <div>
              <h4>Compliance & Tax</h4>
              <a href="#">International Taxation</a>
              <a href="#">Annual Compliance</a>
              <a href="#">Bookkeeping</a>
            </div>
            <div>
              <h4>Growth</h4>
              <a href="#">Market Research</a>
              <a href="#">Marketing Strategy</a>
              <a href="#">Tech Support</a>
            </div>
          </div>
        </li>

        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>

        <li>
          <a href="contact.html" class="btn btn-primary">Consult</a>
        </li>
      </ul>
    </nav>
  </header>
  `;
};

document.body.insertAdjacentHTML("afterbegin", Header());

/* Mega menu hover */
document.querySelectorAll(".mega-parent").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.querySelector(".mega-menu").style.display = "grid";
  });
  item.addEventListener("mouseleave", () => {
    item.querySelector(".mega-menu").style.display = "none";
  });
});
