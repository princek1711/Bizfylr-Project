const Footer = () => {
  return `
  <footer class="glass" style="margin:20px;">
    <div class="container" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:40px;">
      
      <div>
        <h3>BIZFYLR</h3>
        <p style="color:var(--text-muted);margin-top:10px;">
          Global business expansion, compliance & growth solutions.
        </p>
      </div>

      <div>
        <h4>Company</h4>
        <a href="about.html">About</a><br/>
        <a href="services.html">Services</a><br/>
        <a href="contact.html">Contact</a>
      </div>

      <div>
        <h4>Services</h4>
        <a href="#">Company Registration</a><br/>
        <a href="#">Tax & Compliance</a><br/>
        <a href="#">Market Research</a>
      </div>

      <div>
        <h4>Get Started</h4>
        <a href="contact.html" class="btn btn-primary">Book Consultation</a>
      </div>
    </div>

    <div style="text-align:center;padding:20px;color:var(--text-muted);">
      © ${new Date().getFullYear()} Bizfylr. All rights reserved.
    </div>
  </footer>
  `;
};

document.body.insertAdjacentHTML("beforeend", Footer());
