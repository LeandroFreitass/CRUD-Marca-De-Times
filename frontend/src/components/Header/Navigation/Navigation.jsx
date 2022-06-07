import React from "react";
import { Link } from "react-router-dom";
import style from './Navigation.module.css'
import {  NavDropdown } from "react-bootstrap";

const Navigation = () => {
    return (
        <nav className={style.navigation} >
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/marca'>Adicionar Marcas</Link>
                </li>

                <li>
                    <Link to='/regioe'>Adicionar Regiao</Link>
                </li>

                <li>
                    <Link to='/produtos'>Adicionar Produtos</Link>
                </li>

                <NavDropdown title="Visão de Cadastros" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/listagemMarcas">
                    Listagem Marcas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/listagemRegiao">
                    Listagem Regioes
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/listagemProdutos">
                    Listagem Produtos
                  </NavDropdown.Item>
                </NavDropdown>
            </ul>
        </nav>
    )
}

export default Navigation