const Header = () => {

    return (

        <div className="navbar-container">

            <div className="brand">

                <i class="fa-sharp fa-solid fa-p"></i>

            </div>

            <div className="divider">

                <div className="line">

                    <div class="dropdown">
                        <button class="btn btn-secondary btn-sm dropdown-toggle dropdown-toggle-split line-btn first" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Administrativo 
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div class="dropdown">
                        <button class="btn btn-secondary btn-sm dropdown-toggle dropdown-toggle-split line-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Favoritos 
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div className="right-container">

                        <a href="#" rel="usuario">Nome Do Usuário (nome.usuario) <i class="far fa-user"></i></a>

                        <button type="button">[ Sair do sistema ]</button>

                        <span>v 4.3.1</span>

                    </div>

                </div>

                <div className="line bottom">

                    ::PolettoGSW::

                </div>

            </div>

        </div>


    )

}

export default Header;