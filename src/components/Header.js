const Header = () => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <img src="https://img.icons8.com/ios-filled/30/000000/add-rule.png" />
          <a class="navbar-brand">Taller CES4</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                  saldo inicial
                </a>
                <td>
                  <span id="saldoInicial">0</span>
                </td>
              </li>
              <li class="nav-item">
                <a class="nav-link">saldo final</a>
                <td>
                  <span id="saldoFinal">0</span>
                </td>
              </li>
            </ul>
          </div>
          <h3 id="Count">0</h3>
        </div>
      </nav>
      <br />
    </div>
  );
};

export default Header;
